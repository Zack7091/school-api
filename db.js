// db.js
const { Pool } = require('pg');
require('dotenv').config(); // <-- yeh line add karo

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Render ke liye SSL zaroori hai
  },
});

module.exports = pool;
