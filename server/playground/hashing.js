const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = 'abc123!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   })
// });

let hashedPass = '$2a$10$qUUqfqeVo8wyb0d5YvaBg.3E4GpNiEPi9g4X3h0Sh3WvVrLprhctm';

bcrypt.compare(password, hashedPass, (err, result) => {
  console.log(result);
});

// let data = {
//   id: 10
// }
// let token = jwt.sign(data, 'abc123');
// console.log(token);
// let decoded = jwt.verify(token, 'abc123');
// console.log(decoded);


// let message = 'I am user number 3';
// let hash = SHA256(message).toString();

// console.log(`message: ${message}`, `hash: ${hash}`);

// let data = { 
//   id: 4,
// };
// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString(),
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('token was not changed');
// } else {
//   console.log('token was changed');
// }