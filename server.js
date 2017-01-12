const express = require('express');
const app = express();


//Mount the products here using app.use(Products)



//this goes into index.js

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
  console.log('server listening on', PORT);
});




