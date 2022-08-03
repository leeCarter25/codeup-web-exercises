
//function showMultiplicationTable(num) {
 //   for(var i = 1; i <= 10; i += 1) {
 //       console.log(num + ' X ' + i + ' = ' + (num * i))
 //   }
//}
//showMultiplicationTable(7);


for(var i = 1; i <= 10; i += 1) {
   var randomNum = Math.floor(Math.random() * 180) + 20;
   if(randomNum % 2 === 0) {
       console.log(`${randomNum} is even`)
   } else if(randomNum % 2 !== 0) {
       console.log(randomNum + 'is odd')


   }

}
console.log(randomNum);


for(var i = 1; i <= 9; i += 1) {
    console.log(i.toString().repeat(i));

}

 for(var i = 100; i >= 5; i -= 5) {
     console.log(i)
 }





