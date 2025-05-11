const { Pool } = require('pg');

console.log("🔍 DATABASE_URL =", process.env.DATABASE_URL); // DEBUGGING LINE

if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL not found! Check Render Environment settings.");
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
