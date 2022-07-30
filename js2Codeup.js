function shout(message) {
    alert(message.toUpperCase() + "!!!");
}

var returnValue = shout('hello there');
console.log(returnValue);


function sayHello() {
    alert('hello there!');
}

sayHello("codeup");

var globalVar = "Look, I'm Global!";

function sayHello() {
    alert(globalVar);
}

sayHello();

var globalVar = "Look, I'm Global!";

function scopeExample() {
    var localVar = "Look, I'm Local!";
    alert(localVar);
    alert(globalVar);
}

scopeExample();
alert(localVar);

var x = 400;
var y = 200;

function scopeExample() {
    var x = 5;
    var y = 2;
    console.log('x: ' + x + ' y: ' + y);
    return x + y;
}

console.log('x: ' + x + ' y: ' + y);
var returnValue = scopeExample();
console.log(returnValue);








