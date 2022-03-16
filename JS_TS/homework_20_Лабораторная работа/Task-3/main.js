let sum;

const numberArray = [];

while(true) {
    let number = prompt('Введите число от 1 до 100:');

    let numberInt = parseInt(number);

    if(numberInt >= 1 && numberInt <= 100) {
        numberArray.push(numberInt);
    } else if (number === null) {
        let numberSum = numberArray.reduce((prev, item, index) => {
            return prev + item;
        }, 0);
        sum = numberSum / numberArray.length;
        alert(`Среднее арифметическое значение введеных вами чисел составляет: ${sum}`);
        break;
    } else {
        alert('Это не число. \nВведите число.');
    };
};





