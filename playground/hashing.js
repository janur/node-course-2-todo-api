const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';
var hashedPassword;

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    bcrypt.compare(password, hash, (err, res) => {
      console.log(res);
    });
  });
});

//var hashedPassword = '$2a$10$mnxWy/vkl2Lcl1Th8c7DLef1ogeVfrKzTvkR6No80TjNqc2HohnUS';



// var data = {
//   id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log('token', token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// var message = 'I am user number three';
// var hash = SHA256(message).toString();

// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = {
//   id: 4
// };

// var token = {
//   data: data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust');
// }