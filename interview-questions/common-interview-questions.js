const add = (num1, num2) => num1 + num2;

function sum(...args) {
    return args.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
}

const stringIncludes = (sentence, word) => {
    const sentenceArr = sentence.toLowerCase().split(' ');
    return sentenceArr.includes(word.toLowerCase());
};

const getNames = (arr) => {
    return arr.reduce((acc, curr) => {
        if (Object.keys(curr)[0] === 'name') {
            acc.push(Object.values(curr)[0]);
        }
        return acc;
    }, []);
};

const getLargestNumberIndex = (arr) => {
    return arr.indexOf(
        arr.reduce((acc, curr) => {
            if (curr > acc) acc = curr;
            return acc;
        })
    );
};

const delay = (n) => {
    return new Promise((resolve, reject) => setTimeout(() => resolve(), n));
};


function modifyArraysWithoutCreateNew() {
    let myArray = ['a', 'b', 'c', 'd'];
    myArray = ['start', ...myArray];
    myArray = [...myArray, 'end'];
    myArray = ['start', ...myArray, 'end'];
    console.log(myArray);
}

function secretVariable() {
    let private = 'super secret code';
    return function () {
        return private;
    };
}

let getPrivateVariable = secretVariable();



function testOutput() {
    let hero = {
        _name: 'John Doe',
        getSecretIdentity() {
            return this._name;
        },
    };
    let stoleSecretIdentity = hero.getSecretIdentity;
    console.log(stoleSecretIdentity());
    console.log(hero.getSecretIdentity());
}

const palindrome = (str) => {
    str = str.toLowerCase();
    console.log(str === str.split('').reverse().join(''));
};


const fibonaci = (num) => {
    const result = [0, 1];
    for (let i = 2; i <= num; i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1 + prevNum2);
    }
    console.log(result);
};

const fibonnaciRecursion = (num) => {
    if (num < 2) return num;

    return fibonnaciRecursion(num - 1) + fibonnaciRecursion(num - 2);
};

const fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        var isFiveMultiple = i % 5 === 0;
        var isThreeMultiple = i % 3 === 0;
        if (isFiveMultiple && isThreeMultiple) console.log('fizzbuzz');
        else if (isThreeMultiple) console.log('fizz');
        else if (isFiveMultiple) console.log('buzz');
        else console.log(i);
    }
};

const init = () => {
    console.log(add(3, 4));
    console.log(sum(2, 3, 4, 5));

    console.log(stringIncludes('I drove to new York in a van with my friend', 'new'));
    console.log(getNames([{ a: 1 }, { name: 'Jane' }, {}, { name: 'Mark' }, { name: 'Sophia' }, { b: 2 }]));

    console.log(getLargestNumberIndex([7, 1, 4, 12, 9]));

    (async () => {
        console.log('Testing delay');
        await delay(1000);
        console.log('Testing delay end');
    })();

    modifyArraysWithoutCreateNew()

    console.log(getPrivateVariable());

    palindrome('kayak');

    fibonaci(15);

    console.log(fibonnaciRecursion(15));

    fizzBuzz(5);
}

init();
