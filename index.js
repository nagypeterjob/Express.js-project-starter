var express = require('express')
var app = express()
var routes = require('./routes/routes')

var PORT = 3000

app.use('/',routes)

app.listen(PORT,function(){
  console.log('[Server started]')
  console.log('[Serving on port' + PORT + ']')
})
