const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',        
  user: 'root',           
  password: '1234567',   
  database: 'firstproject'  
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.log('Error connecting to the database:', err);
  }
  console.log('Connected to the database.');
});

// Exported the connection obj
module.exports = connection;