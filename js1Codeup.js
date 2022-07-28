var a = 1;
var b = a++;
var c = ++a;

a = 3
b = 1
c = 3

var d = "hello";
var e = false;

d++;
NaN
e++;
0

var perplexed;
perplexed + 2;
NaN

var price = 2.7;
price.toFixed(2);
'2.70'

var price = "2.7";
price.toFixed(2);
//not a function

isNaN(0)
false

isNaN(1)
false

isNaN("")
false

isNaN("string")
true

isNaN("0")
false

isNaN("1")
false

isNaN("3.145")
false

isNaN(Number.MAX_VALUE)
false

isNaN(Infinity)
false

isNaN("true")
true

isNaN(true)
true

isNaN("false")
true

isNaN(false)
false


!true
false

!false
true

!!true
true

!!false
false

!!0
false

!!-0
false

!!1
true


!!-1
true

!!0.1
true

!!"hello"
true

!!""
false

!!''
false

!!"false"
true

!!"0"
true



var day = 3
var days = 9
day * days
total = 27

var google = 400
var amazon = 380
var facebook = 350

a = google * 6
b = amazon * 4
c = facebook * 10

console.log(a + b + c) * 5;



2400
1520
3500

var isFull = false;
var isConflict = false;
var enroll = (!isFull && !isConflict);

var product = true
var offer = product > 2
var premium = false

var username = 'codeup';
var password = 'notstrongpassword'
var isPwdLong = password.length >= 5
var isPwdUnique = password.toLowerCase.indexOf(username)