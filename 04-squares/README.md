# Lab 04: squares-lab

### Instructions

There are several supporting frameworks to interact act with the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model). 
However, the same effects can be achieved in pure javascript. 
This project will be constructed without writing any additional HTML. 
With the HTML skeleton provided, create a simple webpage with a button at the top which adds squares to the page.

#### Further Reading

* A great place to start looking for ways to interact with the [DOM (on MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Document).

* [W3Schools](http://www.w3schools.com/jsref/dom_obj_style.asp) has compiled excellent documentation and examples for modifying the styles of DOM elements.

### Basic Req's

* When the browser first loads, create and insert a button into the page. It should not be in your HTML file to begin with.
* When the button is clicked, a new `div` should be added to the page
* The `div` should be a black square
* All of these `divs` added to the page should have a single class name
* Each `div` shoud have an id with a numerical value equivalent to the number of squares that are in the document before being added
* The `div` should not have any text when created
* When hovering over a square element - the element's id should display centered in the square and disappear when the cursor isn't over it
* When the square is clicked, it should change to a random color (you can randomly choose from a set of colors you pre-define if you wish)
* When a square is double clicked:
* If it is even, the element after the clicked square should be removed
* If it is odd, the element before the clicked square should be removed
* If there is no element before or after when you need it, display an alert saying that the element does not exist
