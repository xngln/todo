const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to mongo db server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5bdfb1b08dca545d4be112f9")
  // }, {
  //   $set: {
  //     completed: true,
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5bdfb5aebb04cf5d5a00c4e6")
  }, {
      $set: {
        name: 'David',
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((res) => {
      console.log(res);
    });

  // client.close();
});