const { ObjectID } = require('mongodb');
const { mongoose } = require('../db/mongoose');
const { Todo } = require('../models/todo');
const { User } = require('../models/users');

let id = '6be7b8a3759d041730ce1df8';
let userId = '5be4e49c04f9d37fb93b35a9';

if (!ObjectID.isValid(id)) {
  console.log('not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id: ', todo);
// }).catch((e) => {
//   console.log(e);
// });

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('Todo by id: ', user);
}).catch((e) => {
  console.log(e);
});
