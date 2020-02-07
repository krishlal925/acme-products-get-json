const express = require('express');
const path = require('path');
const app = express();
const db = require('./db')


app.get('/', (req, res, next) =>{
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/api/products', async (req, res, next) =>{
  const products = await db.readJSON('./products.json')
  res.json(products)
})

app.listen(3000, ()=> console.log('listening on port 3000'))
