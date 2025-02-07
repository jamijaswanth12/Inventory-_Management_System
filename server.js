const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // replace with your MySQL username
    password: '122330', // replace with your MySQL password
    database: 'inventory'
});

db.connect(err => {
    if (err) {
        console.error('MySQL connection error:', err);
        return;
    }
    console.log('MySQL connected');
});