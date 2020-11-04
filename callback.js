const learnJs = (message, callback) => {
    console.log(`message=${message}`);
    callback();
}

const done = () => {
    console.log('I\'ve learnt JS');
}

learnJs('Ya Vlad', done);