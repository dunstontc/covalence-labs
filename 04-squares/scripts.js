
var squareCount = 0;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//


$(document).ready(function () {
    $("#firstDiv").show();
    $("#secondDiv").hide();


//CREATE A NEW ELEMENT   
var $newButton = $("<button>Squares</button>");
    $newButton.addClass("button-class");
    $newButton.id = 'button-id';
    $newButton.css({
        /*backgroundImage: 'url(/Users/ClayDunston/Documents/Covalence/Day4/squarez.jpg)',
        textTransform: 'uppercase',
        width: '50em',
        height: '41em',
        */
        backgroundColor: 'blue',
        textTransform: 'uppercase',
        color: 'white',
        width: '10em',
        height: '10em',
        margin: 'auto',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
        //position: 
    });

//NEW_BUTTON -- CLICK
    $newButton.click(function() {
         var newDiv = $("<div id="+ squareCount +"></div>");
            newDiv.className = "box";
            squareCount++;
            newDiv.css({
                backgroundColor: 'black',
                width: '10em',
                height: '10em',
                border: '10px blue',
                color: 'white',
                textAlign: 'center',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'

             });
//NEW_DIV -- HOVER
            newDiv.hover(function() {
                newDiv.text(newDiv.attr("id"));
                }, 
                function() {
                newDiv.text("");
            });
//NEW_DIV -- CLICK
             newDiv.click(function() {
                newDiv.css("background-color", getRandomColor());
            });
//NEW_DIV -- DOUBLE CLICK
            newDiv.dblclick(function() {
                if(newDiv.attr("id") % 2 == 0) {
                    var sibling = newDiv.next("div");
                if(sibling.length < 1) {
                    alert("There is no sibling afterwards to remove!");
                } else {
                    sibling.remove();
                }
                } else {
                    var sibling = newDiv.prev("div");
                if(sibling.length < 1) {
                    alert("There is no sibling before to remove!");
                } else {
                    sibling.remove();
                        }
                    }
            });  
//APPEND THE DIV  
         $("#firstDiv").append(newDiv);
    });

//APPEND YO BUTTON
$("#firstDiv").append($newButton);

// $("body").click(function(event) {
//     event.which = 87
//         console.log(13);
//     }
// });

// $(document).keypress(function(event) {
//     if (event.which === 65) {
//         $(document).keypress(function(event) {
//             if (event.which === 68) {
//                 $("#firstDiv").hide();
//                 $("#secondDiv").show();
//             }
//         });
//     }
// });

var map = {65: false, 68: false, 87: false};
$(document).keydown(function(e) {
   if (e.keyCode in map) {
       map[e.keyCode] = true;
       if (map[65] && map[68] && map[87]) {
            $("#firstDiv").hide();
            $("#secondDiv").show();
       }
   }
}).keyup(function(e) {
   if (e.keyCode in map) {
       map[e.keyCode] = false;
   }
});
});
