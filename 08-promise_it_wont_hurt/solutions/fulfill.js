'use strict';

// Create a promise:
var promise = new Promise(function (fulfill, reject) {
    setTimeout(function () {        
        fulfill('FULFILLED!');      
    }, 300);    
});
//  Add a handler to the promise’s fulfillment.
// `console.log` will be called with the value passed to `fulfill`, which is 'FULFILLED!'.
//  Note that this statement will ALWAYS be executed before `fulfill` is called
promise.then(console.log);
