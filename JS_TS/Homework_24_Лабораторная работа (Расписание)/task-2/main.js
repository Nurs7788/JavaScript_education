const numberValidator = function() {
    let userNumber = prompt('Введите число:');

    let userNumberInt = parseInt(userNumber);

    if(userNumber === null) {
        alert('Вы нажали "Отмена"');
    } else if(userNumber === '' || isNaN(userNumberInt)) {
        alert('Вы ввели не число.');
    } else if(userNumberInt === 0) {
        alert('Вы ввели ноль.');
    } else if(userNumberInt > 0) {
        alert('Вы ввели положительное число.');
    } else if(userNumberInt < 0) {
        alert('Вы ввели отрицательное число.');
    };
};

numberValidator();
