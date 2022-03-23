const Pool = require("pg").Pool;
require("dotenv").config();

// instantiate this Pool
const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PW,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DB,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, //heroku addons
};

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
