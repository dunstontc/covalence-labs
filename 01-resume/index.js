
//Name to caps
//
var myNombre = ("clay dunston");
var myNombre2 = myNombre.toUpperCase();
console.log("Name: " + myNombre2);
console.log("");

//Career/Field
//
console.log("Career: Student and/or Adventurer");
console.log("");

//Short Description
//
console.log("Description: I sometimes have a hard time being descriptive.");
console.log("");

//List of Interests
//
console.log("My Interests:");
console.log("");
console.log('* ' + "Movies");
console.log("");
console.log('* ' + "Video Games");
console.log("");
console.log('* ' + "Looong Naps");

//Past Positions
//
console.log("");
console.log("My Previous Employment:");
console.log("");

var displayPosition = function(uno, dos) {
    console.log('* ' + uno + '--' + dos);
}

displayPosition("Kingdom Comics", "Sorting, Stocking, & Selling" )
console.log("");
displayPosition("GameStop", "Selling, Stocking, & Sorting");
//Skills
//
console.log("");
console.log("My Skills:");
console.log("");
var displaySkill = function(skill, boolean) {
if (boolean == true)
{
     console.log('* ' + 'Check It: ' + skill);
}
else {
     console.log('* ' + skill);
}}
displaySkill("Stuff & things", false);
console.log("");
displaySkill("Taking looooong ass naps", true);
console.log("");
displaySkill("Things & Stuff", false);