"use strict";
;
class YoungAnimalStrateg {
    Play(hp, food, happy) {
        hp = hp + 10;
        food = food - 2;
        happy = happy + 10;
    }
    eat(hp, food, happy) {
        hp = hp + 10;
        food = food + 10;
        happy = happy + 10;
    }
    health(hp, food, happy) {
        hp = hp + 10;
        food = food;
        happy = happy + 10;
    }
    healthasdasd(hp, food, happy) {
        hp = hp + 10;
        food = food;
        happy = happy + 10;
    }
}
;
class AdultAnimalStrateg {
    Play(hp, food, happy) {
        hp = hp + 5;
        food = food - 5;
        happy = happy + 5;
    }
    eat(hp, food, happy) {
        hp = hp + 5;
        food = food + 5;
        happy = happy + 5;
    }
    health(hp, food, happy) {
        hp = hp + 5;
        food = food;
        happy = happy + 5;
    }
}
;
class OldAnimalStrateg {
    Play(hp, food, happy) {
        hp = hp + 2;
        food = food - 10;
        happy = happy + 2;
    }
    eat(hp, food, happy) {
        hp = hp + 2;
        food = food + 2;
        happy = happy + 2;
    }
    health(hp, food, happy) {
        hp = hp + 2;
        food = food;
        happy = happy + 2;
    }
}
;
class IAnimal {
    constructor(name, age) {
        this.health = 0;
        this.food = 0;
        this.happy = 0;
        this.randomState = 0;
        this.animalName = name;
        this.animalAge = age;
    }
    setStrategy(strategy) {
        this._strategy = strategy;
    }
    getAnimalName(name) {
        return this.animalName = name;
    }
    getAnimalAge(age) {
        return this.animalAge = age;
    }
    getInfo() {
        alert(`Имя питомца: ${this.animalName} \nВозраст питомца: ${this.animalAge} \nСытость: ${this.food} \nНастроение: ${this.happy} \nЗдоровье: ${this.health}`);
    }
    getRandom() {
        this.randomState = Math.floor(Math.random() * 100);
        return this.randomState;
    }
}
;
class shark extends IAnimal {
    eat() {
        if (this.animalAge >= 0 || this.animalAge <= 5) {
            this.setStrategy(new YoungAnimalStrateg());
            this._strategy;
        }
        else if (this.animalAge >= 6 || this.animalAge <= 10) {
            this.setStrategy(new AdultAnimalStrategy());
            this._strategy.eat(this.health, this.food, this.happy);
        }
        else if (this.animalAge > 10) {
            this.setStrategy(new OldAnimalStrategy());
            this._strategy.eat(this.health, this.food, this.happy);
        }
    }
    play() {
        throw new Error("Method not implemented.");
    }
    toHealth() {
        throw new Error("Method not implemented.");
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
        while (shark.health >= 0) {
            let toAction = prompt(`Что хотите сделать с ${shark.animalName}: \nИграть - 1\nКормить - 2\nЛечить - 3`);
            if (toAction === null)
                break;
            if (toAction === '1') {
                shark.getAnimalAge(ageAnimalToUser);
                shark.play();
                shark.getInfo();
            }
            else if (toAction === '2') {
                shark.getAnimalAge(ageAnimalToUser);
                shark.eat();
                shark.getInfo();
            }
            else if (toAction === '3') {
                shark.getAnimalAge(ageAnimalToUser);
                shark.toHealth();
                shark.getInfo();
            }
            ;
            if (shark.health < 0) {
                alert(`${shark.animalName} умер!`);
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
        while (zebra.health >= 0) {
            let toAction = prompt(`Что хотите сделать с ${zebra.animalName}: \nИграть - 1\nКормить - 2\nЛечить - 3`);
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
                zebra.toHealth();
                zebra.getInfo();
            }
            ;
            if (zebra.health < 0) {
                alert(`${zebra.animalName} умер!`);
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
        while (spider.health >= 0) {
            let toAction = prompt(`Что хотите сделать с ${spider.animalName}: \nИграть - 1\nКормить - 2\nЛечить - 3`);
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
                spider.toHealth();
                spider.getInfo();
            }
            ;
            if (spider.health < 0) {
                alert(`${spider.animalName} умер!`);
                arrAnimals = arrAnimals.filter(arrayAnimals => arrayAnimals != arrayAnimals);
            }
            ;
        }
        ;
    }
    ;
}
;
