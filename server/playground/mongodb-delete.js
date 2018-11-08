const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to mongo db server');
  const db = client.db('TodoApp');
  
  // deleted many
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  // delete one
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  // find one and delete - remove indiv item and return those values
  // db.collection('Todos').findOneAndDelete({completed: 'false'}).then((doc) => {
  //   console.log(doc);
  // });

  // db.collection('Users').deleteMany({name: 'David'}).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndDelete({ _id: new ObjectID("5bdfb642395d955d613b6490") }).then((res) => {
    console.log(res);
  });

  // client.close();
});