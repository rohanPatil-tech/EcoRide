const dotenv = require('dotenv');
const mysql = require('mysql2');
dotenv.config();
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
if (err) {
    console.error("Database connection failed:", err.stack);
    return;
}
console.log("Connected to GCP SQL database.");
});

module.exports = connection;