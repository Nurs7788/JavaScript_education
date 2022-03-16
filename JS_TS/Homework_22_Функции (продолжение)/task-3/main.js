const Circle = {
    radius: 0,
    getAreaCircle: function() {
        let sum;
        this.radius = parseInt(prompt('Введите радиус круга:'));
        if(isNaN(this.radius)) {
            do {
                alert('Вы ввели не числовое значение.');
                this.radius = parseInt(prompt('Введите радиус круга:'));
            } while(Number.isInteger(this.radius) === false || Number.isInteger(this.radius) === false);
        };
        sum = Math.PI * (this.radius * this.radius);
        sum = Math.floor(sum);
        return alert(`Радиус круга: ${this.radius} \nПлощадь круга составил: ${sum}`);
    },
    getCircumferenceCircle: function() {
        let sum;
        this.radius = parseInt(prompt('Введите радиус круга:'));
        if(isNaN(this.radius)) {
            do {
                alert('Вы ввели не числовое значение.');
                this.radius = parseInt(prompt('Введите радиус круга:'));
            } while(Number.isInteger(this.radius) === false || Number.isInteger(this.radius) === false);
        };
        sum = 2 * Math.PI * this.radius;
        sum = Math.floor(sum);
        return alert(`Радиус круга: ${this.radius} \nДлина окружности круга составил: ${sum}`);
    }
};
