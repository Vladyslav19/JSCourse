let array1 = [1, 2, 3, -5, 5, 6, 7, 11];

let max = array1[0]
let max2 = array1[0]
let max3 = array1[0]
for (let i = 0; i < array1.length; i++) {
    if (max < array1[i]) {
         max = array1[i];
    }
}

for (let i = 0; i < array1.length; i++) {
    if (max2 < array1[i] && array1[i] < max){
        max2 = array1[i]
    }
}

for (let i = 0; i < array1.length; i++) {
    if (max3 < array1[i] && array1[i] < max2){
        max3 = array1[i]
    }
}
console.log(max3)