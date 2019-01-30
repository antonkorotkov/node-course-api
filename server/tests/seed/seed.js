const {ObjectID} = require('mongodb')
const jwt = require('jsonwebtoken')

const {Todo} = require('./../../models/todo')
const {User} = require('./../../models/user')

const userOneID = new ObjectID()
const userTwoID = new ObjectID()
const users = [{
  _id: userOneID,
  email: 'antonkorotkoff@gmail.com',
  password: '123456',
  tokens: [
    {
      access: 'auth',
      token: jwt.sign({_id:userOneID, access:'auth'}, 'abc123').toString()
    }
  ]
}, {
  _id: userTwoID,
  email: 'some@email.com',
  password: '654321'
}]

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second shit',
  completed: true,
  completedAt: 333000
}]

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos)
  }).then(() => done())
}

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save()
    var userTwo = new User(users[1]).save()

    return Promise.all([userOne, userTwo])
  }).then(() => done())
}

module.exports = {todos, populateTodos, users, populateUsers}
