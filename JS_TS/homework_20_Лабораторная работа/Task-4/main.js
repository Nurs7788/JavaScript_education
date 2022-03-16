const userMistake = [];

const userAnswer = [];

const userTotal = [];

while (true) {
    let firstNumber = Math.floor(Math.random() * 9 + 1);

    let secondNumber = Math.floor(Math.random() * 9 + 1);

    let totalNumber = prompt(`What is ${firstNumber} * ${secondNumber}?`);

    if(totalNumber === null) {
        alert(`Кол-во правильных ответов: ${userAnswer.length} \nКол-во неправильных ответов: ${userMistake.length} \nОбщее кол-во ответов: ${userTotal.length}`);
        break;
    } else if(totalNumber == firstNumber * secondNumber) {
        userAnswer.push(totalNumber);
        userTotal.push(totalNumber);
    } else if(totalNumber != firstNumber * secondNumber) {
        userMistake.push(totalNumber);
        userTotal.push(totalNumber);
    };

};