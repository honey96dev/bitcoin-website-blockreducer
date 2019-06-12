const router = require('express').Router();
const sprintfJs = require('sprintf-js');
const sprintf = sprintfJs.sprintf;
const dbConn = require('../../../_core/dbConn');
const bcrypt = require('bcryptjs');
const userService = require('./../../services/user.service');
/**
 * Routes
 */
router.post('/register', RegisterUser);
router.post('/authenticate', AuthenticateUser);
router.get('/current', GetCurrentUser);
router.get('/', GetAllUsers);
router.post('/', CreateUser);
router.put('/:_id', UpdateUser);
router.delete('/:_id', DeleteUser);
router.post('/change-password', ChangePassword);
router.get('/gettime/:_id', GetDateTime);
router.post('/estimate', GetEstimateData);

module.exports = router;

function CreateUser(req, res, next) {
    const params = req.body;
    const email = params.email.trim();
    const firstName = params.firstName.trim();
    const lastName = params.lastName.trim();
    const password = params.password.trim();
    const username = params.username.trim();
    const auth = params.auth.trim();
    const hash = bcrypt.hashSync(password, 10);
    let sql = sprintf("SELECT * FROM `users` WHERE BINARY `email` = '%s';", email);
    dbConn.query(sql, undefined, (error, results, fields) => {
        if (error || !results) {
            console.warn(error);
            res.status(200).send({
                result: 'error',
                message: 'Unknown error',
            });
            return;
        }
        if (results.length > 0) {
            res.status(200).send({
                result: 'error',
                message: 'Already registered',
            });
            return;
        }
        sql = sprintf("INSERT INTO `users`(`firstName`, `lastName`, `email`, `username`, `hash`, `auth`) VALUES('%s', '%s', '%s', '%s', '%s', '%s');", firstName, lastName, email, username, hash, auth);
        dbConn.query(sql, undefined, (error, results, fields) => {
            if (error) {
                console.warn(error);
                res.status(200).send({
                    result: 'error',
                    message: 'Unknown error',
                });
                return;
            }
            res.status(200).send({
                result: 'success',
                message: 'Successfully added',
            });
        });
    });
}

function RegisterUser(req, res) {
    userService.Create(req)
        .then(function() {
            res.sendStatus(200);
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
}

function AuthenticateUser(req, res) {
    userService.Authenticate(req.body.email, req.body.password)
        .then(function(data) {
            if (data) {
                res.send(data);
            } else {
                res.status(401).send('User Emaiil or password is incorrect');
            }
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function GetCurrentUser(req, res) {
    userService.GetById(req.user.sub)
        .then(function(user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

//  UpdateUser
function UpdateUser(req, res) {
    userService.UpdateUser(req)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function DeleteUser(req, res){
    userService.DeleteUser(req)
    .then(function(){
        res.sendStatus(200);
    })
    .catch(function(err){
        res.status(400).send(err);
    });
}

function ChangePassword(req, res){
    var data = req.body;
    userService.ChangePassword(req, data)
    .then(function(data){
        if(data){
            res.sendStatus(200).send(data);
        }
    })
    .catch(function(error){
        res.status(400).send(error);
    });
}

function GetAllUsers(req, res, next){
    let sql = sprintf("SELECT U.*, IF(U.auth='admin', 'Admin', 'User') `role` FROM `users` U;");
    dbConn.query(sql, undefined, (error, results, fields) => {
         if (error) {
             console.warn(error);
             res.status(200).send([]);
         }
         // let finalResults = [];
         // for (let r in results) {
         //     // finalResults.push({
         //     //
         //     // })
         //     results[r].auth = results[r].auth == 'admin' ? 'Admin' : 'User';
         // }
         res.status(200).send(results);
    });
}

function GetDateTime(req, res){
    userService.GetDateTime(req)
    .then(function(data){
      
        if(data){ 
            res.send(data);
        }
    })
    .catch(function(error){
        res.status(400).send(error);
    });
}

function GetEstimateData(req, res){
    userService.GetEstimateData(req)
    .then(function(data){
        if(data){
            res.send(data);
        }
    })
    .catch(function(error){
        res.status(400).send(error);
    });
}
