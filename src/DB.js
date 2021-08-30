const mysql = require('mysql');
const express = require('express');

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'amaan60320',
    database: 'react'
})

//connect to mysql
db.connect(err => {
    if(err){
        throw err;
    }
    console.log('Connected to MySQL!!!');
})

const app = express();

// create database
app.get("/createdb", (req, res) => {
    let sql = "select * from react.book;";
    db.query(sql, (err, [one, two, three]) => {
        if(err) {
            throw err;
        }
        res.send('Database created!!!');
        console.log(typeof(one.id));
        console.log(req);
    });
});

app.listen('3001', () => {
    console.log('Server started at port 3000');
});