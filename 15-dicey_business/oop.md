# Object Oriented Programming

We've worked with objects before. Up until this point, we've mostly dealt with *object literals*, objects that are declared on demand. Here is an example:
```js
var person = {
    name: 'John Doe',
    email: 'john@test.com'
};
```
With an object literal, we have to manually specify the properties each time we create an object. This can be time consuming when we are working with large sets of data. Additionally, even though you can put functions inside object literals, they still aren't the best way of storing complex data and performing complex tasks.

For this reason, JavaScript supports a paradigm supported by most other programming languages.

## Another Kind of Object
In modern programming, we frequently use a concept called Object Oriented Programming (OOP). Historically it has had little use for web programming, which is why some features of it are lacking in JavaScript.

That is changing, however, with the more widespread use of TypeScript and the advancement of JavaScript. Many employers look for applicants having experience in OOP, so it's important that you get practice using it and understand it.

### What is a class?
At the core of OOP is the concept of Classes. These have nothing to do with CSS classes. You can think of a Class as a re-usable blueprint for making *instances* of that class. We call these instances *objects*. Do not confuse objects with object literals.

### Implementing OOP in JavaScript
In JS, we accomplish OOP using functions. We name these functions starting with a capital letter to follow the standard that class names should start with capital letters.

Consider our person object literal above. We can accomplish the same task with the following code:
First, we need to set up a Person class. This is done just once in your code.
```js
/*
This is called the Person constructor.
The constructor is a place for us to send in data about this particular Person we are creating.
The constructor is special because it runs in tandem with the `new` keyword.
Because of this, the `this` keyword is referring to "this Person we are creating".
*/
var Person = function(name, email) {
    this.name = name;
    this.email = email;
}

/*
After the Person constructor, we can define functions on the prototype.
Functions defined on the prototype are available to any Person we create.
In this example, any Person object we create will have a function called .sayHello.
*/
Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name + ' and my email is ' + this.email + '.');
}
```
Now, anywhere else in our code that can "see" the Person variable (remember **scope**), can create new instances of the Person object.
This is accomplished by using the special keyword **new**.
```js
var somePerson = new Person('Some Name', 'Some Email');
```
Now, you can access whatever properties and functions were set on the Person class as follows:
```js
somePerson.name // value is Some Name
somePerson.email // value is Some Email
somePerson.sayHello() // executes the sayHello function, logging: Hello, my name is Some Name and my email is Some Email.
```

We have defined a class called Person. The class consists of the **constructor** and any functions that an object of that class should be able to perform are created on the class's **prototype**.
The prototype of an object is basically an object that keeps track of all the variables and functions that object contains. Think of a prototype as a record of what makes a Person, a Person.

Notice that the constructor function is taking two parameters in this example. Recall that parameters only exist while a function is running. In order to "save" the passed in values to this new Person object we are creating, we simply made two assignment statements, assigning the parameter values to `this.name` and `this.email` respectively. These properties did not exist somewhere before. We chose to save them right there in the constructor, and by using `this`, the Person we are creating will have `name` and `email` properties now with the values we have specified.

The constructor runs any time we create a new object from a class using the `new` keyword. The constructor is where we put any logic that makes sense to happen when we create an object. For example, if a Person needed to have a div on the screen with its name and email in it, our Person class may look something like this:
```js
var Person = function(name, email) {
    this.name = name;
    this.email = email;
    this.div = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerHTML = this.name;
    var h3 = document.createElement('h3');
    h3.innerHTML = this.email;
    this.div.appendChild(h1);
    this.div.appendChild(h3);
    document.body.appendChild(this.div);
}
Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name + ' and my email is ' + this.email + '.');
}
```
Now, consider the following three statements:
```js
var p1 = new Person('Some Person', 'Some Email');
var p2 = new Person('Some Other Person', 'Some Other Email');
var p3 = new Person('Someone Else', 'Another Email');
```
Just by running those three statements, you will see three `div`s appear on the screen (assuming you waited for the DOM to load!)

Finally, running these three statements:
```js
p1.sayHello();
p2.sayHello();
p3.sayHello();
```
will cause the following output to log to the console:
```
Hello, my name is Some Person and my email is Some Email.
Hello, my name is Some Other Person and my email is Some Other Email.
Hello, my name is Someone Else and my name is Another Email.
```
How is the output customized for the object? 
To answer this, let's think back to our `this` list. 
Notice that the body of the sayHello function contains `this`. 
Are we manually calling the sayHello function? We are. 
So to figure out what `this` means, let's try looking to the left of the dot. We can. 
For each of the function calls, `p1`, `p2`, and `p3` are respectively to the left of the dot. 
So when sayHello runs `this.name`, it gets the `name` property of p1, p2, p3, etc.
