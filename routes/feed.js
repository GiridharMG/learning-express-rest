const express = require('express');
const feedController = require('../controller/feed');
const route = express.Router();

route.get('/posts', feedController.getPosts);

module.exports = route;