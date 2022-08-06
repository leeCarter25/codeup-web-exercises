function isTrue(input) {
    return input === true;
}
function isFalse(input) {
    return input === false;
}
function not(input) {
    return !input;
}
function addOne(input) {
    return Number(input) + 1;
}

function isEven(input) {
    if(Number(input % 2 === 0)) {
        return true;
    } else {
        return false;
    }
}
function isIdentical(a, b) {
    return a === b;
}

function isEqual(a, b) {
    return a == b;
}

function or(a, b) {
    return a || b;
}
function and(a, b) {
    return a && b;
}

function concat(a, b) {
    return '' + a + b;
}