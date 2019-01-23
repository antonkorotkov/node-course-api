const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB Server')
  }
  console.log('Connected to MongoDB Server')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c477c713f69cbeb085e12a6')
  // }, {
  //   $set: {
  //     complete: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5c44a6d11b2974ae55737dce")
  }, {
    $set: {
      name: 'Evil'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res)
  })

  //db.close()
})
