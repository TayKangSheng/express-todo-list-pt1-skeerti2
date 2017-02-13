// const mongoose = require('mongoose')
// const todosController = require('./controllers/todos_controller')
//
// mongoose.connect('mongodb://localhost/todo-list')
// mongoose.Promise = global.Promise
const express = require('express')
const app = express() // these 2 executed to start express
const mongoose = require('mongoose')
mongoose.connect('mongodb://skeerti2:khatey01@ds151289.mlab.com:51289/listoftodos')

mongoose.Promise = global.Promise
// const startupController = require('./controllers/startupController.js')
// var bodyParser = require('body-parser')
const Todo = require('./models/todo')

const todoController = require('./controllers/todos_controller.js')
var bodyParser = require('body-parser')

const port = process.env.PORT||4000

// TODO. include express and body-parser, plugin in the todos controller and start listening
app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended: true}))
 app.use('/todos', todoController)
// app.get('/', function(req, res){
//   res.send('hello, welcome')
// })
app.use(function(err, req, res, next){
  if(err){
  res.send({
    error: err.message
  })
}
})

app.listen(port, function () {
  console.log('middleware test is running on port ' + port)
})
