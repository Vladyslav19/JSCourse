const array1 = ['dog', 25, {a:1, b:2}, null];

array1.forEach(element => {
    if (typeof element === 'object' && element !== null) {
        Object.keys(element).forEach(key => {
            console.log(`Element ${key} equal to ${element[key]}`)
        })
    } else console.log(element);
})

