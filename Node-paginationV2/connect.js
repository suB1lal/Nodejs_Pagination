const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "php-pagination",//db name
});
db.connect(err => {
  if (err) throw err;
  console.log("DB bağlantısı gerçekleşti");
});
module.exports = db;
