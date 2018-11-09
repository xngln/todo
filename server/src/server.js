let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

let Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null,
  },
});

let todo2 = new Todo({
  text: 'go to the gym',
  completed: 'false',
  completedAt: null,
})

// todo2.save().then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log(err);
// });


// User model

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  }
})

let user1 = new User({
  email: 'davxliu@gmail.com',
})

user1.save().then((res) => {
  console.log(res);
}, (err) => {
  console.log(err);
});