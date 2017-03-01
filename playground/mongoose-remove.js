const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '58b7205981eab5ad9b0dd95c'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('58b7205981eab5ad9b0dd95c').then((todo) => {
  console.log(todo);
});