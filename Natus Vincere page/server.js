var express = require('express');
 var app = express();
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "lab_10"
});

app.get("/news", function (req, res) {
        con.query("SELECT * FROM news", function (err, result, fields) {
          if (err) throw err;
          res.send(result);        
      });
});
app.get("/feedback", function (req, res) {
        con.query("SELECT * FROM feedback", function (err, result, fields) {
          if (err) throw err;
          res.send(result);        
      });
});
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})
app.get("/Contacts.html", function (req, res) {
  res.sendFile(__dirname + "/Contacts.html")
})
app.get("/Fans.html", function (req, res) {
  res.sendFile(__dirname + "/Fans.html")
})
app.get("/PNG/error_icon.png", function (req, res) {
  res.sendFile(__dirname + "/PNG/error_icon.png")
})
app.get("/error.html", function (req, res) {
  res.sendFile(__dirname + "/error.html")
})

app.get("/CSS/main.css", function (req, res) {
  res.sendFile(__dirname + '/CSS/main.css')
})
app.get("/CSS/bootstrap.min.css", function (req, res) {
  res.sendFile(__dirname + '/CSS/bootstrap.min.css')
})
app.get("/CSS/fans.css", function (req, res) {
  res.sendFile(__dirname + '/CSS/Fans.css')
})
app.get("/CSS/Contacts.css", function (req, res) {
  res.sendFile(__dirname + '/CSS/Contacts.css')
})
app.get("/PNG/last_win.png", function (req, res) {
  res.sendFile(__dirname + '/PNG/last_win.png')
})
app.get("/PNG/Navi-team.jpg", function (req, res) {
  res.sendFile(__dirname + '/PNG/Navi-team.jpg')
})
app.get("/CSS/News.css", function (req, res) {
  res.sendFile(__dirname + '/CSS/News.css')
})
app.get("/CSS/Admin.css", function (req, res) {
  res.sendFile(__dirname + '/CSS/Admin.css')
})
app.get("/JS/script-fans.js", function (req, res) {
  res.sendFile(__dirname + '/JS/script-fans.js')
})
app.get("/JS/script-admin.js", function (req, res) {
  res.sendFile(__dirname + '/JS/script-admin.js')
})
app.get("/JS/script-news.js", function (req, res) {
  res.sendFile(__dirname + '/JS/script-news.js')
})
app.get("/JS/popper.min.js", function (req, res) {
  res.sendFile(__dirname + '/JS/popper.min.js')
})
app.get("/JS/jquery.min.js", function (req, res) {
  res.sendFile(__dirname + '/JS/jquery.min.js')
})
app.get("/JS/bootstrap.min.js", function (req, res) {
  res.sendFile(__dirname + '/JS/bootstrap.min.js')
})
app.get("/PNG/logo.jpg", function (req, res) {
  res.sendFile(__dirname + '/PNG/logo.jpg')
})
app.get("/PNG/News.jpg", function (req, res) {
  res.sendFile(__dirname + '/PNG/News.jpg')
})
app.get("/News.html", function (req, res) {
  res.sendFile(__dirname + "/News.html")
})
app.get("/Admin.html", function (req, res) {
  res.sendFile(__dirname + "/Admin.html")
})
app.get("/PNG/Image.png", function (req, res) {
  res.sendFile(__dirname + '/PNG/Image.png')
})
app.get("/PNG/new_news.jpg", function (req, res) {
  res.sendFile(__dirname + '/PNG/new_news.jpg')
})
app.get("/manifest.cache", function (req, res) {
  res.sendFile(__dirname + '/manifest.cache')
})
app.get("/PNG/Map.png", function (req, res) {
  res.sendFile(__dirname + '/PNG/Map.png')
})
app.get("/add-news", function (req, res) {
        con.query("insert into news(title, description, image) values (\"" +req.query.title+"\", \""+req.query.description+"\", \""+req.query.image+"\");" , function (err, result, fields) {
          if (err) throw err;
          console.log('ok');        
      });
});
app.get("/add-feedback", function (req, res) {
        con.query("insert into feedback(time, filling) values (\"" +req.query.time+"\", \""+req.query.filling+"\");" , function (err, result, fields) {
          if (err) throw err;
          console.log('ok');        
      });
});



app.listen(3000);

console.log('todo list RESTful API server started on: 3000');