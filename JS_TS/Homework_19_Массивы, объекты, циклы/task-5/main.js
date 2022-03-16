const symbol = prompt('Введите символ:');

let result = '';

for(let i = 0; i < 7; i++) {
    for(let j = 0; j < 20; j++) {
        result = result + symbol;
    }
    result = result + '\n';
}

alert(result);