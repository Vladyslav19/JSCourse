function hello() {
    console.log('Hello', this);
}

let person = {
    name: 'Sanya',
    age: 143,
    sayHello: hello,
    logInfo: function (phone, job) {
        console.group('Person info:');
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Phone is ${phone}`);
        console.log(`Job is ${job}`);
        console.groupEnd();
    }
}

let Vlad = {
    name: 'Vlad',
    age: 2322
}
person.logInfo.bind(Vlad, '123-33-444-555', 'sdet')();

Array.prototype.multipleBy = function (n) {
    return this.map(element => {
        return element * n;
    })
}

arr1 = [1, 3, 6];
arr2 = [5, 3, 0];

arr1.multipleBy(2);
arr2.multipleBy(3);