var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

var obj;
app.post('/register', function(req, res) {
    this.obj = req.body;
    console.log(this.obj.email);

    console.log("data sent successfully");


    var con = mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "sunil2000",
        database: 'react'
    });

    var t1 = "create table if not exists stud2(name varchar(30),email varchar(50) primary key,phone bigint,password varchar(20))";
    var names = [
        [this.obj.name, this.obj.email, this.obj.phone, this.obj.password]
    ];
    var ins = "insert into stud2 values ?";
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(t1);
        con.query(ins, [names], function(err, result) {
            if (err) res.status(404).send({ "error": "user already exist" })
            else res.status(200).send(this.obj);
        });

    });
});
app.post('/login', function(req, res) {
    this.obj = req.body;
    console.log(this.obj.name);
    console.log("data sent successfully");
    var con = mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "sunil2000",
        database: 'react'
    });

    var t1 = "select exists(select * from stud2 where stud2.name=? and stud2.email=? and stud2.password=?) as EXIST";

    con.connect(function(err) {

        if (err) throw err;
        console.log("Connected!");

        con.query(t1, [req.body.name, req.body.email, req.body.password], function(err, result) {
            if (err) {
                res.status(404).send("error in mysql");
                console.log(err);
            } else {
                res.status(200).send(result[0]);
                console.log(result[0].EXIST);
                console.log('success', req.body.name);
            }
        });

    });
});
app.listen(PORT, function() {
    console.log("server running on localhost:" + PORT);
});