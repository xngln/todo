const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to mongo db server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5bdfbbd985c8ee80fe9bfa8d"),
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to find documents', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to find documents', err);
  // });

  db.collection('Users').find({name: 'David'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(docs);
  }, (err) => {
    console.log('not able to find documents');
  });

  // client.close();
});