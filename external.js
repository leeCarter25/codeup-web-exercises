"use strict";
var response = "";
while(response === "") {
    response = prompt("what number of days total did you rent the kids movies?");
    response = alert("9 days");
    response = prompt("how much is the price each day for a rented movie?");
    response = alert("3 dollars");
    response = prompt("how much total will you pay?");
    response = alert("27 dollars");
}
var response = "";
while(response === "") {
    response = prompt("how much does Google pay per hour?");
    response = alert("400");
    response = prompt("how much does amazon pay per hour?");
    response = alert("380");
    response = prompt("how much does facebook pay per hour?");
    response = alert("350");
    response = prompt("how many hours did you work at google?");
    response = alert("6");
    response = prompt("how many hours did you work at amazon?");
    response = alert("4");
    response = prompt("how many hours did you work at facebook?");
    response = alert("10");
    response = prompt("how much will you recieve in payment for the week?");
    response = alert("37,100");

    var canEnroll = classempty
    var classempty = classFull
    function classFull(cantEnroll) {
        console.log(false);
        if (canEnroll)
            console.log(true);
    }

    classFull(true);

    var premiumMember = false;
    const actualNumber = 2;
    const myItems = prompt('How many items did you buy?');

    if(+myItems >= 2) {
        premiumMember = true;
    }

    if (premiumMember === true) {
        console.log('Cool you are going to recieve a product offer!');
    } else {
        console.log(`too bad in order to recieve a product offer you would have to buy a minimum of ${actualNumber} items that are not expired, unless your a premium member`);
    }
}



