arr1 = [1, 2, 3, 6, 8, 11, -4];

arr2 = [];
sum = 0;

for (let i = 0; i < arr1.length; i++) {
    let k = arr1[i] % 2;
    if ( k === 0 ) {
        sum += arr1[i];
    }
}

console.log(sum)