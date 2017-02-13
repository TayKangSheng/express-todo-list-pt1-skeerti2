const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

// TODO. import express and create a Router, replace the methods below with routes e.g.
// router.post('/', function(req,res) => {
//  Todo.create(req.body, function (err, todo) {
//    res.json(todo)
//  }
// })

//router.get('/', function (req, res) {
   // res.send('all startups list')
  // res.send({
    // message: 'hi there'
   //})
 //})

// router.get('/', function(req, res){
//    res.send('hello, welcome')
//  })
router.post('/', function (req, res, next) { //create(params)
  // console.log()
  Todo.create(req.body, function (err, todo) {
    if (err) {
      // console.error(err)
      return next(err)
    }
    console.log(todo)
    res.send(todo)
  })
})

router.get('/', function(req, res, next){ //function list()
  Todo.find({}, function (err, todos) {
    if (err) {
      // console.log(err)
      return next(err)
    }
    console.log("hi")
    res.send(todos)
  })
})

router.get('/:id', function (req, res, next) {
  Todo.findById(req.params.id, function (err, todo) {
    if (err){
      // console.log(err)
      return next(err)
    }
         console.log(todo)
         res.send(todo)
  })
})
//   Todo.findById(id, function (err, todo) {
//     if (err) return console.log(err)
//     console.log(todo)
//   })
// }
//

router.put('/:id', function(req, res, next){
  Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} , function (err, updatedTodo) {
    if (err) {
      // console.log(err)
      return next(err)
    }
    console.log(updatedTodo)
    res.send(updatedTodo)
  })
})

router.delete('/:id', function(req, res, next){
  Todo.findByIdAndRemove(req.params.id, function (err, output) {
    if (err){
      // console.error(err)
      return next(err)
    }
    console.log(output)
    res.send({
      message: "successfully deleted element by id"
    })
  })

})

//
// module.exports = {
//   create,
//   list,
//   show,
//   update,
//   destroy
// }
module.exports = router
