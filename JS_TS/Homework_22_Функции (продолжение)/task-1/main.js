const Playstation = {
    model: 'Playstation 4 pro',
    memory: '500 GB',
    ram: '8192 MB',
    CPU: '8-ядерный AMD',
    price: 200000,
    getSpecifications: function() {
        return `Основные характеристики ${this.model}: \nЖесткий диск: ${this.memory} \nОперативная память: ${this.ram} \nЦентральный процессор: ${this.CPU}`
    },
    buyPlastation: function() {
        const discount = confirm('У вас есть дисконтная карта нашего магазина?');
        if(discount === true) {
            this.price -= 50000;
            console.log(`С вычетом скидки стоимость составил: ${this.price}`);
        } else {
            console.log(`Без скидки стоимость составил: ${this.price}`);
        };
    }
};

console.log(Playstation.getSpecifications());

console.log(Playstation.buyPlastation());


const Car = {
    model: 'Toyota',
    type: 'Corola',
    series: '50',
    productionYear: 2015,
    owner: 'Кайратулы Нурасыл',
    getInformationCar: function() {
        return `Модель машины: ${this.model} \nТип машины: ${this.type} \nСерия выпуска машины: ${this.series} \nГод производства: ${this.productionYear} \nВладелец: ${this.owner}`
    }
};

console.log(Car.getInformationCar());


const Cat = {
    name: 'Том',
    age: 2,
    breed: 'Британец',
    owner: 'Нурасыл',
    favoriteFood: 'Курица и яблоко',
    getInformationCat: function() {
        return `Моего кота зовут ${this.name} и в этом году ему исполнилось ${this.age} года, порода ${this.name} ${this.breed}. Его любимая еда ${this.favoriteFood}`
    }
};

console.log(Cat.getInformationCat());