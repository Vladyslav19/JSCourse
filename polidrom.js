let a = 'qwerrewq'

let stringLenght = a.length
let halfStringLenght = stringLenght / 2;
let arr = a.split('');
let firstPart = [];
let secondPart = [];

for (let i = 0; i < halfStringLenght; i++ ) {
        console.log(a);
        firstPart.push(a[i]);
}
resFirst = firstPart.join('')

for (let j = halfStringLenght; j < stringLenght; j++) {
        secondPart.push(a[j]);
}

resSecond = secondPart.reverse().join('');

if (resFirst === resSecond) {
    console.log(`${a} is  a polidrom`);
}
else console.log(`${a} is not a polidrom`);