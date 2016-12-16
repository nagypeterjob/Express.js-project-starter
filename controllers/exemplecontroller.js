
var model = require('../model/examplemodel')
var Q = require('q')

module.exports = (function() {

  var controller = this

  controller.get = function(req,res){
    model.ret(res,req).then(function(item){
      res.send(item)
    }).catch(function(err){
      res.send(err)
    })
  }
  controller.foo = function(req,res){
    res.json({'foo':'bar'});
  }
  return controller
})()
