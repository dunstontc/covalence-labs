/*
 *  In its most basic terms, a promise is an object that defines a method called then.
 *  The promise object represents a value that may be available some time in the future.
 */


//  Traditional Async Code w/ callbacks
// Parse.User.logIn('user', 'pass', {
//   success: function(user) {
//     query.find({
//       success: function(results) {
//         results[0].save({
//           key: value
//         }, {
//           success: function(result) {
//             // the object was saved
//           }
//         });
//       }
//     });
//   }
// });


//  The same code, but using a promise workflow
// Parse.User.logIn('user', 'pass').then(function(user) {
//   return query.find();
// }).then(function(results) {
//   return results[0].save({
//     key: value
//   });
// }).then(function(result) {
//   // the object was saved
// }).catch(function(err) {
//   // an error happened somewhere in the process
// });


//  Using setTimeout, print the string 'TIMED OUT!' after 300ms.

let myTimeout = function() {
  setTimeout(function() {
    console.log('TIMED OUT!');
  }, 300);
};

myTimeout();
