var diceArray = [];

var Die = function(){
  this.value = Math.floor(Math.random() * 6) + 1;
  this.div = $('<div class="dieDiv">' + this.value + "</div>");
  $("body").append(this.div);
};

Die.prototype.roll = function () {
  this.value = Math.floor(Math.random() * 6) + 1;
  this.div.text(this.value);
};

function createDie() {
    diceArray.push((new Die));
};

$(document).ready(function(){
	$("#btn-gen-die").on("click", function() {
  diceArray.push(new Die);
  console.log(diceArray);
  });
	$("#btn-roll-dice").on("click", function() {

  console.log(diceArray);
  });
});