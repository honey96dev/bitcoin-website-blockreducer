var http = require('http');
var express = require('express');
var expressJwt = require('express-jwt');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var cors = require('cors');
var bodyParser = require('body-parser');


var config = require('./_core/config');

var httpPort = process.env.PORT || config.server.httpPort;
var cluster = require('cluster');
if (cluster.isMaster) {
    cluster.fork();

    cluster.on('exit', function(worker, code, signal) {
        cluster.fork();
    });
}

if (cluster.isWorker) {
    // put your code here
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/_auth');
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(session({
        secret: config.session.secret,
        resave: false,
        saveUninitialized: true,
        store: new MySQLStore( config.mysql )
    }));

// use JWT auth to secure the api
    app.use('/api', expressJwt({ secret: config.session.secret })
        .unless({
            path: [
                '/api/users/authenticate',
                '/api/users/register',
                /\/api\/fft\/calculated\/*/,
                /\/api\/fft\/id0\/*/,
                /\/api\/fft\/id0_collection\/*/,
            ]
        }));

    const apis = require('./app/controllers/api.controller');

    app.use('/register', require('./app/controllers/authentication/register.controller'));
    app.use('/login', require('./app/controllers/authentication/login.controller'));
    app.use('/chart', require('./app/controllers/chart.controller'));
    app.use('/api/users', require('./app/controllers/authentication/user.controller'));
    app.use('/api/fft', apis);
    app.use('/app', require('./app/controllers/app.controller'));
    app.use('/exchange', require('./exchange/app'));

    app.use('/', function(req, res) {
        return res.redirect('/app');
    });

    var httpServer = http.createServer(app);
    var io = require('socket.io')(httpServer);
    var cryptoMarkets = require('./exchange/routes/cryptoMarkets');
    cryptoMarkets.setSocketIO(io);

    httpServer.listen(httpPort, function() {
        console.log((new Date()) + '=> Http Sever running on http://' + httpServer.address().address + ':' + httpPort);
    });
}
