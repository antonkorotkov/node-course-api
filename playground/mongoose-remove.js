const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result)
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id:'5c4b77528c7dbe6212ef14b3'}).then((todo) => {
  
})

Todo.findByIdAndRemove('5c4b77528c7dbe6212ef14b3').then((todo) => {
  console.log(todo)
})
