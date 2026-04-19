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

const createTable = 
`
CREATE TABLE IF NOT EXISTS reviews (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(150) NOT NULL,
year VARCHAR(20),
dorm VARCHAR(100),
phone VARCHAR(20),
location VARCHAR(50) NOT NULL,
resturant VARCHAR(100) NOT NULL,
rating INT NOT NULL,
comment TEXT);

CREATE TABLE IF NOT EXISTS dining_locations(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(150) NOT NULL,
description TEXT,
hours VARCHAR(300),
image_url VARCHAR(400));

CREATE TABLE IF NOT EXISTS subscriptions(
id INT AUTO_INCREMENT PRIMARY KEY,
user_email VARCHAR(150) NOT NULL,
plan VARCHAR(50) NOT NULL,
price DECIMAL(6,2) NOT NULL);
`;

db.query(createTable, err =>{
    if(err) console.log('There was an error creating your table!', err.message);
    else
        console.log('Your tables were succesfully created');

});
// TEST ROUTE (this proves server works)
app.get('/', (req, res) => {
    res.send("Server is running");
});

// OPTIONAL: test database route
app.get('/test-db', (req, res) => {
    db.query("SELECT 1", (err, result) => {
        if (err) {
            res.send("Database connection failed");
        } else {
            res.send("Database is connected");
        }
    });
});

// START SERVER
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
