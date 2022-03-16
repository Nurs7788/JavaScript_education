let symbol = prompt('Введите символ:');

let sentens = prompt('Введите слово:');

const countChars = function(x, y) {
    let result = 0;

    let countSum = 0;

    while(result <= y.length) {
        if(y[result] === x) {
            countSum = countSum + 1;
        };
        result = result + 1;
    };
    return alert(countSum);
};

countChars(symbol, sentens);