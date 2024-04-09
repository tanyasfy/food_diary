import mysql from 'mysql2';

// create a new MySQL connection
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'food_diary'
});
// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});
// close the MySQL connection
connection.end();