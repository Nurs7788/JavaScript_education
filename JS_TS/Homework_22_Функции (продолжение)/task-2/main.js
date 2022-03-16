const Calculator = {
    firstNumber: 0,
    secondNumber: 0,
    read: function() {
            this.firstNumber = parseInt(prompt('Введите первое число:'));
            this.secondNumber = parseInt(prompt('Введите второе число:'));
            if(isNaN(this.firstNumber) || isNaN(this.secondNumber)) {
                do {
                    alert('Вы ввели не числовое значение.');
                    this.firstNumber = parseInt(prompt('Введите первое число:'));
                    this.secondNumber = parseInt(prompt('Введите второе число:'));
                } while(Number.isInteger(this.firstNumber) === false || Number.isInteger(this.secondNumber) === false);
        };
    },
    sum: function() {
        let sum;
        sum = this.firstNumber + this.secondNumber;
        return console.log(sum);
    },
    multiply: function() {
        let sum;
        sum = this.firstNumber * this.secondNumber;
        return console.log(sum);
    }
};

Calculator.read();
Calculator.sum();
Calculator.multiply();