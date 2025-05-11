// db.js
const { Pool } = require('pg'); //

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // ye Render pe seedha ENV se ayega
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
