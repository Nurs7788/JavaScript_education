"use strict";
class IAnimals {
    constructor(name, age) {
        this._health = 0;
        this._food = 0;
        this._happy = 0;
        this._randomState = 0;
        this._animalName = name;
        this._animalAge = age;
        this.setStrategy(age);
    }
    setStrategy(age) {
        if (age > 0 && age <= 5) {
            this._strategy = new YoungAnimal();
        }
        ;
        if (age > 5 && age <= 10) {
            this._strategy = new AdultAnimal();
        }
        ;
        if (age > 10) {
            this._strategy = new OldAnimal();
        }
        ;
    }
    getRandom() {
        this._randomState = Math.floor(Math.random() * 100);
        return this._randomState;
    }
    eat(age) {
        this.getRandom();
        if (this._randomState < 50) {
            this.setStrategy(age);
        }
        else {
            this._health -= 15;
            this._happy -= 15;
            this._food = this._food;
            alert('Корм был просрочен. Питомец отравился!');
        }
        ;
    }
    play(age) {
        this.getRandom();
        if (this._randomState < 50) {
            this.setStrategy(age);
        }
        else {
            this._health -= 15;
            this._happy -= 15;
            this._food = this._food;
            alert('Питомец травмировался во время игры!');
        }
        ;
    }
    toHealth(age) {
        this.getRandom();
        if (this._randomState < 50) {
            this.setStrategy(age);
        }
        else {
            this._health -= 20;
            this._happy = this._happy;
            this._food = this._food;
            alert('Лечение оказался не эффективным и вызвал осложнение');
        }
        ;
    }
    getAnimalName(name) {
        return this._animalName = name;
    }
    getAnimalAge(age) {
        return this._animalAge = age;
    }
    getInfo() {
        alert(`Имя питомца: ${this._animalName} \nВозраст питомца: ${this._animalAge} \nСытость: ${this._food} \nНастроение: ${this._happy} \nЗдоровье: ${this._health}`);
    }
}
;
while (true) {
    let userToAnimal = prompt('Выберите вашего питомца: \nАкула - 1 \nЗебра - 2 \nПаук - 3');
    if (userToAnimal === null)
        break;
    let arrAnimals = [];
    if (userToAnimal === '1') {
        alert('Ваш питомец: Акула!');
        let nameAnimalToUser = prompt('Введите имя вашего питомца:') || '';
        let ageAnimalToUser = parseInt(prompt('Введите возраст вашего питомца:') || '');
        const shark = new IAnimals(nameAnimalToUser, ageAnimalToUser);
        arrAnimals.push(shark);
        alert(`Ваш питомец: Акула \nИмя питомца: ${shark.getAnimalName(nameAnimalToUser)} \nВозраст вашего питомца: ${shark.getAnimalAge(ageAnimalToUser)}`);
        while (shark._health >= 0) {
            let toAction = prompt(`Что хотите сделать с ${shark._animalName}: \nИграть - 1\nКормить - 2\nЛечить - 3`);
            if (toAction === null)
                break;
            if (toAction === '1') {
                shark.getAnimalAge(ageAnimalToUser);
                shark.play(ageAnimalToUser);
                shark.getInfo();
            }
            else if (toAction === '2') {
                shark.getAnimalAge(ageAnimalToUser);
                shark.eat(ageAnimalToUser);
                shark.getInfo();
            }
            else if (toAction === '3') {
                shark.getAnimalAge(ageAnimalToUser);
                shark.toHealth(ageAnimalToUser);
                shark.getInfo();
            }
            ;
            if (shark._health < 0) {
                alert(`${shark._animalName} умер!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
            }
            ;
        }
        ;
    }
    else if (userToAnimal === '2') {
        alert('Ваш питомец: Зебра!');
        let nameAnimalToUser = prompt('Введите имя вашего питомца:') || '';
        let ageAnimalToUser = parseInt(prompt('Введите возраст вашего питомца:') || '');
        const zebra = new IAnimals(nameAnimalToUser, ageAnimalToUser);
        arrAnimals.push(zebra);
        alert(`Ваш питомец: Акула \nИмя питомца: ${zebra.getAnimalName(nameAnimalToUser)} \nВозраст вашего питомца: ${zebra.getAnimalAge(ageAnimalToUser)}`);
        while (zebra._health >= 0) {
            let toAction = prompt(`Что хотите сделать с ${zebra._animalName}: \nИграть - 1\nКормить - 2\nЛечить - 3`);
            if (toAction === null)
                break;
            if (toAction === '1') {
                zebra.getAnimalAge(ageAnimalToUser);
                zebra.play(ageAnimalToUser);
                zebra.getInfo();
            }
            else if (toAction === '2') {
                zebra.getAnimalAge(ageAnimalToUser);
                zebra.eat(ageAnimalToUser);
                zebra.getInfo();
            }
            else if (toAction === '3') {
                zebra.getAnimalAge(ageAnimalToUser);
                zebra.toHealth(ageAnimalToUser);
                zebra.getInfo();
            }
            ;
            if (zebra._health < 0) {
                alert(`${zebra._animalName} умер!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
            }
            ;
        }
        ;
    }
    else if (userToAnimal === '3') {
        alert('Ваш питомец: Паук!');
        let nameAnimalToUser = prompt('Введите имя вашего питомца:') || '';
        let ageAnimalToUser = parseInt(prompt('Введите возраст вашего питомца:') || '');
        const spider = new IAnimals(nameAnimalToUser, ageAnimalToUser);
        arrAnimals.push(spider);
        alert(`Ваш питомец: Акула \nИмя питомца: ${spider.getAnimalName(nameAnimalToUser)} \nВозраст вашего питомца: ${spider.getAnimalAge(ageAnimalToUser)}`);
        while (spider._health >= 0) {
            let toAction = prompt(`Что хотите сделать с ${spider._animalName}: \nИграть - 1\nКормить - 2\nЛечить - 3`);
            if (toAction === null)
                break;
            if (toAction === '1') {
                spider.getAnimalAge(ageAnimalToUser);
                spider.play(ageAnimalToUser);
                spider.getInfo();
            }
            else if (toAction === '2') {
                spider.getAnimalAge(ageAnimalToUser);
                spider.eat(ageAnimalToUser);
                spider.getInfo();
            }
            else if (toAction === '3') {
                spider.getAnimalAge(ageAnimalToUser);
                spider.toHealth(ageAnimalToUser);
                spider.getInfo();
            }
            ;
            if (spider._health < 0) {
                alert(`${spider._animalName} умер!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
            }
            ;
        }
        ;
    }
    ;
}
;
