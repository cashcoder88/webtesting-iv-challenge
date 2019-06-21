const express = require('express');
const server = express();
const Yog = require('../yogurt/yogurtModel.js')

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/yogurt', (req, res) => {
  Yog.getYogurt()
  .then(yogurts => {
    res.status(200).json(yogurts)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

module.exports = server;