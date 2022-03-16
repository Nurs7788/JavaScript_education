"use strict";
class IAnimal {
    constructor(name, age) {
        this._randomState = 0;
        this._animalName = name;
        this._animalAge = age;
        this._health = 0;
        this._food = 0;
        this._happy = 0;
        this.setStrategy(age);
    }
    get hp() {
        return this._health;
    }
    get name() {
        return this._animalName;
    }
    get food() {
        return this._food;
    }
    get happy() {
        return this._happy;
    }
    setStrategy(age) {
        if (age >= 0 && age <= 5) {
            this._strategy = new YoungAnimal();
        }
        else if (age > 5 && age <= 10) {
            this._strategy = new AdultAnimal();
        }
        else {
            this._strategy = new OldAnimal();
        }
        ;
    }
    getRandom() {
        this._randomState = Math.floor(Math.random() * 100);
        return this._randomState;
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
    eat() {
        this.getRandom();
        if (this._randomState < 50) {
            this._food = this._strategy.valueUp(this._food);
            this._happy = this._strategy.valueUp(this._happy);
            this._health = this._strategy.valueUp(this._health);
        }
        else {
            this._food -= 15;
            alert('Корм был просрочен. Питомец отравился!');
        }
    }
    play() {
        this.getRandom();
        if (this._randomState < 50) {
            this._food = this._strategy.valueDown(this._food);
            this._happy = this._strategy.valueUp(this._happy);
            this._health = this._strategy.valueUp(this._health);
        }
        else {
            this._happy -= 15;
            alert('Питомец травмировался во время игры!');
        }
        ;
    }
    health() {
        this.getRandom();
        if (this._randomState < 50) {
            this._happy = this._strategy.valueUp(this._happy);
            this._health = this._strategy.valueUp(this._health);
        }
        else {
            this._health -= 15;
            alert('Лечение оказался не эффективным и вызвал осложнение');
        }
    }
}
;
;
class YoungAnimal {
    valueUp(value) {
        return value + 10;
    }
    valueDown(value) {
        return value - 2;
    }
}
;
class AdultAnimal {
    valueUp(value) {
        return value + 5;
    }
    valueDown(value) {
        return value - 5;
    }
}
;
class OldAnimal {
    valueUp(value) {
        return value + 2;
    }
    valueDown(value) {
        return value - 10;
    }
}
;
class Shark extends IAnimal {
    constructor(name, age) {
        super(name, age);
    }
}
;
class Spider extends IAnimal {
    constructor(name, age) {
        super(name, age);
    }
}
;
class Zebra extends IAnimal {
    constructor(name, age) {
        super(name, age);
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
        const shark = new Shark(nameAnimalToUser, ageAnimalToUser);
        arrAnimals.push(shark);
        alert(`Ваш питомец: Акула \nИмя питомца: ${shark.getAnimalName(nameAnimalToUser)} \nВозраст вашего питомца: ${shark.getAnimalAge(ageAnimalToUser)}`);
        while (shark.hp >= 0 || shark.food >= 0 || shark.happy >= 0) {
            let toAction = prompt(`Что хотите сделать с ${shark.name}: \nИграть - 1\nКормить - 2\nЛечить - 3`);
            if (toAction === null)
                break;
            if (toAction === '1') {
                shark.getAnimalAge(ageAnimalToUser);
                shark.setStrategy(ageAnimalToUser);
                shark.play();
                shark.getInfo();
            }
            else if (toAction === '2') {
                shark.getAnimalAge(ageAnimalToUser);
                shark.setStrategy(ageAnimalToUser);
                shark.eat();
                shark.getInfo();
            }
            else if (toAction === '3') {
                shark.getAnimalAge(ageAnimalToUser);
                shark.setStrategy(ageAnimalToUser);
                shark.health();
                shark.getInfo();
            }
            ;
            if (shark.hp < 0) {
                alert(`${shark.name} умер!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
                break;
            }
            ;
            if (shark.food < 0) {
                alert(`${shark.name} умер от голода!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
                break;
            }
            ;
            if (shark.happy < 0) {
                alert(`${shark.name} умер от тоски!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
                break;
            }
            ;
        }
        ;
    }
    else if (userToAnimal === '2') {
        alert('Ваш питомец: Зебра!');
        let nameAnimalToUser = prompt('Введите имя вашего питомца:') || '';
        let ageAnimalToUser = parseInt(prompt('Введите возраст вашего питомца:') || '');
        const zebra = new Zebra(nameAnimalToUser, ageAnimalToUser);
        arrAnimals.push(zebra);
        alert(`Ваш питомец: Акула \nИмя питомца: ${zebra.getAnimalName(nameAnimalToUser)} \nВозраст вашего питомца: ${zebra.getAnimalAge(ageAnimalToUser)}`);
        while (zebra.hp >= 0 || zebra.food >= 0 || zebra.happy >= 0) {
            let toAction = prompt(`Что хотите сделать с ${zebra.name}: \nИграть - 1\nКормить - 2\nЛечить - 3`);
            if (toAction === null)
                break;
            if (toAction === '1') {
                zebra.getAnimalAge(ageAnimalToUser);
                zebra.play();
                zebra.getInfo();
            }
            else if (toAction === '2') {
                zebra.getAnimalAge(ageAnimalToUser);
                zebra.eat();
                zebra.getInfo();
            }
            else if (toAction === '3') {
                zebra.getAnimalAge(ageAnimalToUser);
                zebra.health();
                zebra.getInfo();
            }
            ;
            if (zebra.hp < 0) {
                alert(`${zebra.name} умер!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
                break;
            }
            ;
            if (zebra.food < 0) {
                alert(`${zebra.name} умер от голода!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
                break;
            }
            ;
            if (zebra.happy < 0) {
                alert(`${zebra.name} умер от тоски!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
                break;
            }
            ;
        }
        ;
    }
    else if (userToAnimal === '3') {
        alert('Ваш питомец: Паук!');
        let nameAnimalToUser = prompt('Введите имя вашего питомца:') || '';
        let ageAnimalToUser = parseInt(prompt('Введите возраст вашего питомца:') || '');
        const spider = new Spider(nameAnimalToUser, ageAnimalToUser);
        arrAnimals.push(spider);
        alert(`Ваш питомец: Акула \nИмя питомца: ${spider.getAnimalName(nameAnimalToUser)} \nВозраст вашего питомца: ${spider.getAnimalAge(ageAnimalToUser)}`);
        while (spider.hp >= 0 || spider.food >= 0 || spider.happy >= 0) {
            let toAction = prompt(`Что хотите сделать с ${spider.name}: \nИграть - 1\nКормить - 2\nЛечить - 3`);
            if (toAction === null)
                break;
            if (toAction === '1') {
                spider.getAnimalAge(ageAnimalToUser);
                spider.play();
                spider.getInfo();
            }
            else if (toAction === '2') {
                spider.getAnimalAge(ageAnimalToUser);
                spider.eat();
                spider.getInfo();
            }
            else if (toAction === '3') {
                spider.getAnimalAge(ageAnimalToUser);
                spider.health();
                spider.getInfo();
            }
            ;
            if (spider.hp < 0) {
                alert(`${spider.name} умер!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
                break;
            }
            ;
            if (spider.food < 0) {
                alert(`${spider.name} умер от голода!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
                break;
            }
            ;
            if (spider.happy < 0) {
                alert(`${spider.name} умер от тоски!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
                break;
            }
            ;
        }
        ;
    }
    ;
}
;
