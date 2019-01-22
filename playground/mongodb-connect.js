const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB Server')
  }
  console.log('Connected to MongoDB Server')

  // db.collection('Todos').insertOne({
  //   text: 'Some to do',
  //   completed: false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert')
  //   }
  //
  //   console.log(JSON.stringify(result.ops, null, 2))
  // })

  // db.collection('Users').insertOne({
  //   name: 'Evil',
  //   age: 30,
  //   location: 'Kharkiv'
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert')
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), null, 2))
  // })

  db.close()
})
