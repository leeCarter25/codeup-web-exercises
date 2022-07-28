"use strict";
console.log('Hello from external JavaScript');
alert("Welcome to my Website");

var confirmed = confirm('Are you sure you want to do that?');
console.log(confirmed);

var response = "";
while (response === "") {
    response = prompt("What's your favorite color?");
    response = alert("That's my fav color too!");
    var firstname = prompt("what's your first name?");
    var lastname = prompt("what's your last name?");
    console.log(firstname + lastname);
}
