const connection = require('./database');

// Function to execute SQL queries
const query = (sql, params) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (error, results) => {
      if (error) {
        reject(error);// If there's an error, reject the promise
        return;
      }
      resolve(results);// If successful, resolve the promise with the results
    });
  });
};

// Function to get data by ID
module.exports.getbyid = async (event) => {
  const { id } = event.pathParameters;// Extract the ID from the URL path
  const sql = 'SELECT * FROM blogs WHERE id = ?';// SQL query to get data by ID
  try {
    const results = await query(sql, [id]);// Execute the query with the ID parameter
    return {
      statusCode: 200,
      body: JSON.stringify(results)// Return the results as a JSON string
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not fetch user' })// Return an error message if something goes wrong
    };
  }
};

// Function to get all data
module.exports.getAll = async () => {
  const sql = 'SELECT * FROM blogs'; // SQL query to get all records
  
  try {
    const results = await query(sql); // Execute the query
    return {
      statusCode: 200,
      body: JSON.stringify(results) // Return the results as a JSON string
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not fetch data' }) // Return an error message if something goes wrong
    };
  }
};