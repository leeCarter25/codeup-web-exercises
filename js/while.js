var num = 1;
while(num < 65536) {
    num *= 2;
    console.log(num);
}
var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var soldCones = Math.floor(Math.random() * 5) + 1;

    if(soldCones <= allCones) {
        console.log(`${soldCones} cones sold...`)
        allCones -= soldCones
    } else if(soldCones > allCones) {
        console.log(`Cannot sell you ${soldCones} cones I only have ${allCones}...`)

    }
   // console.log(allCones);
   } while(allCones !== 0);
    console.log('yay! I sold them all!')


