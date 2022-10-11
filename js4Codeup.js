//Coding Challenge # 1

let mWeight = 78;
let mHeight = 1.69;
let jWeight = 92;
let jHeight = 1.95;
const markBMI = mWeight / (mHeight * mHeight);
const johnBMI = jWeight / (jHeight * jHeight);

let mWeight2 = 95;
let mHeight2 = 1.88;
let jWeight2 = 85;
let jHeight2 = 1.76;
const markBMI2 = mWeight2 / (mHeight2 * mHeight2);
const johnBMI2 = jWeight2 / (jHeight2 * jHeight2);
let markHigherBMI = markBMI;
let markHigherBMI2 = markBMI2;

console.log(markHigherBMI >= johnBMI);
console.log(markHigherBMI2 >= johnBMI2);


console.log(mWeight / (mHeight * mHeight));
console.log(jWeight / (jHeight * jHeight));

console.log(mWeight2 / (mHeight2 * mHeight2));
console.log(jWeight2 / (jHeight2 * jHeight2));