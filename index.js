const mongodb = require('./helper/Helper')
const express = require('express')
const app = express();
app.use(express.json());
const authroute = require('./router/routes');


const port = 3000;
// const path = require('path');

// app.use('/uploadsImages',express.static(path.join(__dirname,'/uploadsImages')))
app.use('/',authroute);
app.listen(port,()=>{
    console.log("server working on ", port);
});




