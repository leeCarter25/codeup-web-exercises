"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/*function analyzeColor(randomColor) {
    if(randomColor === 'red') {
        console.log('apples are red');
    } else if(randomColor === 'orange') {
        console.log('oranges or orange');
    } else if(randomColor === 'yellow') {
        console.log('the sun is yellow');
    } else if(randomColor === 'green') {
        console.log('grass is green');
    } else if(randomColor === 'blue') {
        console.log('the sky is blue');
    } else {
        console.log('I don\'t know anything by ' + randomColor);
    }

}
analyzeColor('aqua');



/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

switch(randomColor) {
    case 'red' :
        console.log('that\'s a red light!');
        break;
    case 'orange' :
        console.log('tangerines are orange');
        break;
    case 'yellow' :
        console.log('That\'s a sunflower');
        break;
    case 'green' :
        console.log('HULK SMASH!!!');
        break;
    case 'blue' :
        console.log('blue eyed Dragon');
        break;
    default:
        console.log('I don\'t know ' + randomColor);

}



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


var userColor = prompt('what is your fav color?');
function analyzeColor(color) {
    switch(color) {
        case 'red' :
            return 'Apples are red';
        case 'orange' :
            return 'oranges are orange';
        default :
            return 'your color is great!';

    }

}
alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount) {
    switch(luckyNumber) {
        case 0: return totalAmount;
        case 1 : return totalAmount - (totalAmount * 0.10)
        case 2 : return totalAmount - (totalAmount * 0.25)
        case 3 : return totalAmount - (totalAmount * 0.35)
        case 4 : return totalAmount - (totalAmount * 0.50)
        case 5 : return 'free';

    }
}
calculateTotal(4, 100);


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 //Generate a random number between 0 and 6
 //var luckyNumber = Math.floor(Math.random() * 6);






/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//1. make a confirm that asks if a user would like to input a number
//2. assign confirm in a variable that will be a boolean
//3. if confirm variable is true then prompt a user for a number and store it in a variable
//4. alert the number as even or odd
//5. add 100 and alert number to a function
//6. check if number is neg or pos and return that value
//7. if user input is not a number then inform that the input was not a number

var isTrue = confirm('would you give me a number?');
if(isTrue) {
    var thatNumber = prompt('give me that number');
    if (isNaN(thatNumber)) {
        alert('that is not a number');
    } else {
        if (thatNumber % 2 === 0) {
            alert('that number is even');
        } else if (thatNumber % 2 !== 0) {
            alert('that number is odd');
        }
        var newNum = Number(thatNumber) + 100;
        alert(`${thatNumber} + 100 = ${newNum}`);
        if (thatNumber < 0) {
            alert(`that number is negative ${thatNumber}`);
        } else if (thatNumber > 0) {
            alert(`that number is positive ${thatNumber}`);
        }
    }
}
