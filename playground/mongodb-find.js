const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB Server')
  }
  console.log('Connected to MongoDB Server')

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c44a5a6ead760ae4b3c4e5d')
  // }).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, null, 2))
  // }, (error) => {
  //   console.log('Unable to fetch', error)
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`)
  // }, (error) => {
  //   console.log('Unable to fetch', error)
  // })

  db.collection('Users').find({name: "Evil"}).toArray().then((docs) => {
    console.log(`Todos:`)
    console.log(docs)
  }, (error) => {
    console.log('Unable to fetch', error)
  })

  //db.close()
})
