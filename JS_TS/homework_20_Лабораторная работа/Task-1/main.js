let numberFirst = parseInt(prompt('Введите первое число:'));


if(Number.isInteger(numberFirst) == false) {
    do {
        alert('Это не число.');
        numberFirst = parseInt(prompt('Введите первое число:'));
    } while(Number.isInteger(numberFirst) == false);
};


let numberSecond = parseInt(prompt('Введите второе число:'));

if(Number.isInteger(numberSecond) == false) {
    do {
        alert('Это не число.');
        numberSecond = parseInt(prompt('Введите второе число:'));
    } while(Number.isInteger(numberSecond) == false);
};


if(numberFirst > numberSecond) {
    alert('Первок число больше второго');
} else if(numberFirst < numberSecond) {
    alert('Первое число меньше второго');
} else if(numberFirst == numberSecond) {
    alert('Числа равны');
};

    



