const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "za0957650448",
    host: "localhost",
    port: "5432",
    database: "todo"
});

module.exports = pool;