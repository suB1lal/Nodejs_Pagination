const express = require("express");
const app = express();
const db = require("./connect");
PORT = 5000;

//template engine belirtme
app.set("view engine", "ejs");
app.use(express.static("public"));
//Express uygulamanızın kök dizinindeki public klasörünü statik dosyaların kök dizini olarak belirler

app.get("/", (req, res) => {
  let page = req.query.page || 1;
  let postPergPage = 4;
  // let sql = "select * from texts";
  let sql = `select * from texts limit ${
    postPergPage * page - postPergPage
  },${postPergPage}`;
  let sqlTotal = "select * from texts";
  db.query(sql, (err, result) => {
    // console.log(result)
    db.query(sqlTotal, (errTotal, resultTotal) => {
      let count = resultTotal.length;
      res.render("index", {
        result: result,
        nowPage: parseInt(page),
        totalPage: Math.ceil(count / postPergPage),
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`sunucu ayakta http://localhost:${PORT}`);
});
