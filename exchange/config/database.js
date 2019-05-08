// config/database.js
// let connection = {
//     'host': 'blockreducermysql.mysql.database.azure.com',
//     'user': 'btc_block@blockreducermysql',
//     'password': 'iDragon712'
// };
let connection = {
    'host':'localhost',
    'user':'root',
    'password':''
}
let database  = 'blockreducerdb';
let usersTable = 'users';

let pool = require('mysql').createPool({
    connectionLimit : 10,
    host            : connection.host,
    user            : connection.user,
    password        : connection.password,
    database        : database,
});

module.exports.config = {
    connection: {
        'host': 'blockreducermysql.mysql.database.azure.com',
        'user': 'btc_block@blockreducermysql',
        'password': 'iDragon712'
    },
    'database': database,
    'users_table': usersTable
};

module.exports.getPool = function(){
    return pool;
};
