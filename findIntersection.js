function FindIntersection(strArr) {
    let arr1 = strArr[0].split(', ');
    let arr2 = strArr[1].split(', ');
    let res = [];
    // code goes here
    console.log(arr1);
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i])
        for (let j = 0; j < arr2.lenght; j++) {
            console.log(arr1[i])
            if (arr1[i] === arr2[j]) {
                res.push(arr1[i]);
            }
        }
    }
    if (res.length === 0) {
        return false;
    }
    return res.join(',');
}


// keep this function call here
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));