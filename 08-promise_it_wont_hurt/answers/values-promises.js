
function attachTitle(name) {
    return "DR. " + name;
}

// var promise = new Promise(function(fulfill, reject) {
    // fulfill("MANHATTAN");
// }) SAME THING AS BELOW

Promise.resolve("MANHATTAN").then(attachTitle).then(console.log);