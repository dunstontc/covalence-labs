
// var sentences = ['ten ate neite ate nee enet ite ate inet ent eate','Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eatanot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
// var sentIndex = -1;
// var blockIndex = 0;


// $(document).ready(function () {
//     $("#keyboard-lower-container").show();
//     $("#keyboard-upper-container").hide();
// //Show Uppercase
//     $(document).keydown(function (event) {
//         if (event.which == 16) {
//             $("#keyboard-lower-container").hide();
//             $("#keyboard-upper-container").show();
//         }
//     });
// //Show Lowercase
//     $(document).keyup(function (event) {
//         if (event.which == 16) {
//             $("#keyboard-lower-container").show();
//             $("#keyboard-upper-container").hide();
//         }
//     });

//     $(document).keypress(function(e){
//         var key = $("#" + e.which);
//         key.css('background-color', '#8ee6c1');

//         $(document).keyup(function(event) {
//             var key = $("#"+e.which);
//             key.css("background-color", "f5f5f5");
//         });
//     });

// function loadSentence() {
//     sentIndex++;
//     $("#target-letter").text(sentences[sentIndex].charAt(0));
//     $("#sentence").text(sentences[sentIndex]);
// }

// function moveBlock(){
//     $("#yellow-block").css("left", "+=17.5px");
//     blockIndex++;
//     $("#target-letter").text(sentences[sentIndex].charAt(blockIndex));
//     if(blockIndex >=sentences[sentIndex].length) {
//         loadSentence();
//         $("#yellow-block").css("left", "+=17.5px");
//         blockIndex = 0
//     }
// }
// }); //Close "ready(function)"

var sentences = [
  'ten ate neite ate nee enet ite ate inet ent eate',
  'Too ato too nOt enot one totA not anot tOO aNot',
  'oat itain oat tain nate eate tea anne inant nean',
  'itant eate anot eat nato inate eat anot tain eat',
  'nee ene ate ite tent tiet ent ine ene ete ene ate'
];
var sentIndex = (-1); //CURRENT SENTENCE IN MY ARRAY (SET TO -1 BECAUSE WE INCREMENT WHEN LOADING SENTENCE)
var blockIndex = 0; //CURRENT CHARACTER IN MY SENTENCE

var words = 54; //NUMBER OF WORDS IN ALL MY sentences
var mistakes = 0; //VAR TO KEEP TRACK OF HOW MANY MISTAKES WE MAKE
var startTime = -1; //SETTING THIS TO -1 SO I CAN CHECK THAT WHEN WE FIRST PRESS KEY

//DISPLAY ONLY LOWER-CASE KEYBOARD WHEN THE PAGE LOADS
$(document).ready(function() {
    //SHOW THE LOWERCASE/HIDE THE UPPER CASE
    $("#keyboard-lower-container").show();
    $("#keyboard-upper-container").hide();
    //LOAD THE FIRST SENTENCE
    loadSentence();
});

// document.addEventListener('keydown', function() {}); STANDARD DOM
$(document).keydown(function(e) {
    //IF THE KEY PRESSED IS SHIFT
    if(e.which == 16) {
        $("#keyboard-lower-container").hide();
        $("#keyboard-upper-container").show();
    }
});

$(document).keyup(function(e) {
    //IF THE KEY PRESSED IS SHIFT
    if(e.which == 16) {
        $("#keyboard-lower-container").show();
        $("#keyboard-upper-container").hide();
    }
});

//USE KEYPRESS BECAUSE WE DON'T WANT KEYS LIKE SHIFT/BACKSPACE/ETC
//ALSO SO WE CAN GET DIFFERENT KEYCODES (E.WHICH) FOR UPPERCASE/LOWERCASE LETTERS
$(document).keypress(function(e) {
    //IF STARTTIME IS -1, SET STARTTIME TO A NEW DATE OBJECT
    if(startTime == -1) {
        startTime = new Date();
    }
    //GET THE ELEMENT WHO'S ID CORRESPONDS WITH THE KEYCODE OF THE KEY WE PRESSED
    var key = $("#" + e.which);
    //SET ITS BACKGROUND COLOR TO YELLOW
    key.css('background-color', 'yellow');
    //CHECK IF THE KEY PRESSED IS THE RIGHT LETTER IN THE SENTENCE
    var letter = String.fromCharCode(e.which);
    //IF THE KEY PRESSED IS THE RIGHT LETTER, CREATE A NEW CHECKMARK AND PUT IT IN #FEEDBACK
    if(letter === sentences[sentIndex].charAt(blockIndex)) {
        var glyph = $("<span class='glyphicon glyphicon-ok'></span>");
        $("#feedback").append(glyph);
    //OTHERWISE, ADD A RED-X AND INCREMENT THE NUMBER OF MISTAKES
    } else {
        mistakes++;
        var glyph = $("<span class='glyphicon glyphicon-remove'></span>");
        $("#feedback").append(glyph);
    }
    //MOVE THE YELLOW BLOCK ALONG AND INCREMENT THE CHARACTER THAT WE'RE ON
    moveBlock();
    //ADD A NEW EVENT LISTENER TO SET THE ELEMENT'S BACKGROUND COLOR BACK TO DEFAULT
    $(document).keyup(function(event) {
       key.css('background-color', '#f5f5f5');
    });
});

//LOAD SENTENCE FROM SENTENCE ARRAY AT THE CURRENT INDEX (sentIndex)
function loadSentence() {
    //INCREMENET WHICH SENTENCE WE'RE ON IN THE ARRAY
    sentIndex++;
    //EMPTY THE #FEEDBACK DIV OF ALL THE CHECKMARKS/RED-X'S
    $("#feedback").empty();
    //IF WE'VE REACHED THE TOTAL NUMBER OF SENTENCES IN THE ARRAY, END THE GAME
    if(sentIndex >= sentences.length) {
        endGame();
    //OTHERWISE LOAD THE FIRST LETTER IN THE SENTENCE IN #TARGET-LETTER AND SET
    //#SENTENCE'S TEXT TO OUR NEXT SENTENCE
    } else {
        $("#target-letter").text(sentences[sentIndex].charAt(0));
        $("#sentence").text(sentences[sentIndex]);
    }
}

//MOVE THE YELLOW BLOCK IN THE HTML TO THE RIGHT EVERY TIME WE TYPE
function moveBlock() {
    //ADD 17.5PX TO THE EXISTING LEFT VALUE OF OUR YELLOW-BLOCK DIV
    $("#yellow-block").css("left", "+=17.5px");
    //INCREMENT THE BLOCKINDEX VAR
    blockIndex++;
    //SET #TARGET-LETTER'S TEXT TO THE NEXT LETTER IN OUR loadSentence
    $("#target-letter").text(sentences[sentIndex].charAt(blockIndex));
    //IF THE BLOCK IS AT THE END OF THE SETENCE: LOAD THE NEXT SENTENCE AND RESET
    if(blockIndex >= sentences[sentIndex].length) {
        loadSentence();
        $("#yellow-block").css("left", "17.5px");
        blockIndex = 0;
    }
}

//WPM = numberOfWords / minutes - 2 * numberOfMistakes

//RUN THE END GAME IF WE HAVE REACHED OUR MAXIMUM NUMBER OF SENTENCES
function endGame() {
    //CALCULATE THE WORDS PER MINUTE
    var minutes = new Date().getMinutes() - startTime.getMinutes();
    var wpm = words / (minutes < 1 ? 1 : minutes) - 2 * mistakes;
    //TERNARY STATEMENT ----------^
    //CREATE A CONGRATULATORY MESSAGE WITH THE USER'S WPM
    var endMessage = "Congratulations, you won! " +
    "\nYour WPM is " + wpm +
    "\nWould you like to play again?";
    //PROMPT THE USER WITH A CONFIRM/CANCEL BOX AND SAVE THEIR RESPONSE TO A VARIABLE
    var playAgain = confirm(endMessage);
    //IF THEY CLICKED CONFIRM, RELOAD THE WEBPAGE
    if(playAgain == true) {
        location.reload();
    }
}
