getSum(1, 2); //correct
getSum2(2, 3); //error
getSum3(2, 4); //error

//Function with no arguments
function showMessage() {
    console.log('Hello World!');
}

//Function
function getSum(a, b) {
    return a + b;
}

//Function expression
const getSum2 = function(a, b) {
    return a + b;
}

//Arrow function
const getSum3 = (a,b) => {
    return a + b;
}

const sqrt = a => a*a;

