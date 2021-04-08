const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host :'',
    user :'',
    password :'',
    database :''
})

app.listen(3001,() =>{
    console.log('running on port 3001');
});


