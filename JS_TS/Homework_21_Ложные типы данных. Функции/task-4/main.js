let firstNumberFromUser = prompt('Введите первое число:');

let secondNumberFromUser = prompt('Введите второе число');

let firstNumber = parseInt(firstNumberFromUser);

let secondNumber = parseInt(secondNumberFromUser);

const powerFunction = function(x, y) {
    let sum = x;

    if(y === undefined) {
        sum *= x;
        return alert(sum);
    };
    for(let i = 1; i < y; i++) {
        sum *= x;
    };
    return alert(sum);
};


if(isNaN(secondNumber)) {
    powerFunction(firstNumber);
} else {
    powerFunction(firstNumber, secondNumber);
};

