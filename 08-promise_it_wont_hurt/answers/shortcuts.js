Promise.resolve("Hello");
Promise.reject("Goodbye");

var promise = new Promise(function(fulfill, reject) {
    reject("Derp");
});

promise.catch(console.log);