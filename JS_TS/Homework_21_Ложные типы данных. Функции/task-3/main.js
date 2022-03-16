const multiplyFunction = function(firstNumber, secondNumber) {
    let firstNumberFromUser = parseInt(prompt('Введите первое число:', firstNumber));

    let secondNumberFromUser = parseInt(prompt('Введите второе число:', secondNumber));

    let sum;

    if(firstNumber === undefined || secondNumber === undefined) {
        alert('Необходимо ввести оба параметра.');
    } else if(isNaN(firstNumberFromUser) || isNaN(secondNumberFromUser)) {
        alert('Вы ввели не число.');
    } else {
        sum = firstNumberFromUser/Math.pow(secondNumberFromUser, - 1);
        return alert(sum);
    };
};

multiplyFunction();

