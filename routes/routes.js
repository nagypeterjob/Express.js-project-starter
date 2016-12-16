var pckg = require('../controllers/exemplecontroller')

module.exports = (function() {
  'use strict';
  var router = require('express').Router();

  router.get('/get',pckg.get)
  router.get('/foo',pckg.foo)
  return router;
})()
