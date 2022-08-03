do {
    var number = prompt('enter a number between 1 and 50');
    for (var i = 1; i <= 50; i += 1) {
        if (i % 2 !== 0 && i === Number(number)) {
            console.log(`yikes! Skipping number: ${i}`)
        } else if (i % 2 !== 0) {
            console.log(`Here is an odd number : ${i}`)
        }
    }
} while (isNaN(number) || number % 2 === 0 || number >= 50 || number < 1);
