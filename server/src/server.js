const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

let Todo = mongoose.model('Todo', {
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  completedAt: {
    type: Number,
  },
});

let newTodo = new Todo({
  text: 'cook dinner',
});

let todo2 = new Todo({
  text: 'go to the gym',
  completed: 'false',
  completedAt: null,
})

// newTodo.save().then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log(err);
// });

todo2.save().then((res) => {
  console.log(res);
}, (err) => {
  console.log(err);
});