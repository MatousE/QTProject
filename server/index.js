const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host :'',
    user :'',
    password :'',
    database :''
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
