const { Pool } = require('pg');

if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL is not set!");
  process.exit(1); // 
}

console.log("✅ Connecting to DB:", process.env.DATABASE_URL); // show in Render logs

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
