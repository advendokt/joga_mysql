const mysql = require ('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '12345678',
    database: 'joga_mysql',
})

connection.connect((err) => {
    if(err) throw err
    console.log('MySQL server is connected')
})

module.export = connection