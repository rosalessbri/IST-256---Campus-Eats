const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection(
    {
        host:'localhost',
        user: 'root',
        password: 'campuseats',
        database: 'campusEats'
    }
);
db.connect(err =>{
if(err) throw err;
console.log('SQL connected');
});
