const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to mongo db server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false,
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert todo:', err);
  //   } 

  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'David',
  //   age: 19,
  //   location: 'Vancouver',
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert todo:', err);
  //   }

  //   console.log(res.ops[0]._id.getTimestamp());
  // });

  client.close();
});