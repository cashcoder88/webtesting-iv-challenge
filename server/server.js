const express = require('express');
const server = express();
const Yogurt = require('../yogurt/yogurtModel.js')

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/yogurt', (req, res) => {
  Yogurt.getYogurt()
  .then(yogurts => {
    res.status(200).json(yogurts)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

server.post('/yogurt', (req, res) => {
  Yogurt.addYogurt(req.body)
  .then(yogurt => {
    res.status(201).json(yogurt)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

server.delete('/yogurt/:id', (req, res) => {
  Yogurt.removeYogurt(req.params.id)
  .then(deleted => {
    if (deleted > 0) {
      res.status(200).json({message: `deleted yogurt successfully`})
    } else {
      res.status(404).json({
        message: 'could not find yogurt with specified id'
      })
    }
  })
  .catch(error => {
    res.status(500).json(error)
  })
});
module.exports = server;