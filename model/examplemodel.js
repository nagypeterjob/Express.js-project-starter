var Q = require('q')

module.exports = (function() {

    var model = this

    model.ret = function(res,req){
      var deferred = Q.defer();
      var x = "data"
      if(x){
         deferred.resolve(x)
      }else{
        deferred.reject('error')
      }
      return deferred.promise
    }

    return model
})()
