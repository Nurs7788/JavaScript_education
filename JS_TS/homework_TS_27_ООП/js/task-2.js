"use strict";
class Elevator {
    constructor(currentFloor, capacity, maxFloor) {
        this._currentFloor = currentFloor;
        this._capacity = capacity;
        this._maxFloor = maxFloor;
    }
    get currentFloor() {
        return this._currentFloor;
    }
    set currentFloor(currentFloor) {
        this._currentFloor = currentFloor;
    }
    get capacity() {
        return this._capacity;
    }
    set capacity(capacity) {
        this._capacity = capacity;
    }
    get maxFloor() {
        return this._maxFloor;
    }
    set maxFloor(maxFloor) {
        this._maxFloor = maxFloor;
    }
    upOneFloor(floor) {
        if (this.isAllowableFloor(floor) === false) {
            console.log('Ошибка');
            return;
        }
        ;
        this._currentFloor++;
    }
    downOneFloor(floor) {
        if (this.isAllowableFloor(floor) === false) {
            console.log('Ошибка');
            return;
        }
        ;
        this._currentFloor--;
    }
    isAllowableWeight(weight) {
        if (weight > this._capacity) {
            return false;
        }
        ;
        return true;
    }
    isAllowableFloor(floor) {
        if (floor > this._maxFloor || floor < 1) {
            return false;
        }
        ;
        return true;
    }
    move() {
        while (true) {
            console.log(`Вы находитесь на этаже: ${this._currentFloor}`);
            let floorFromUser = prompt('Введите этаж:');
            let weightFromUser = prompt('Введите вес:');
            if (floorFromUser === null)
                break;
            if (weightFromUser === null)
                break;
            let floorUser = parseInt(floorFromUser);
            if (this.isAllowableFloor(floorUser) === false) {
                console.log('Ошибка');
                return;
            }
            ;
            let weightUser = parseInt(weightFromUser);
            if (this.isAllowableWeight(weightUser) === false) {
                console.log('Слишком большой вес');
                return;
            }
            ;
            if (isNaN(floorUser) === true || isNaN(weightUser) === true) {
                console.log('Вы ввели не числовое значение');
                break;
            }
            ;
            while (floorUser != this._currentFloor) {
                if (floorUser < this._currentFloor) {
                    this.downOneFloor(floorUser);
                    console.log(`Этаж: ${this._currentFloor}`);
                }
                else if (floorUser > this._currentFloor) {
                    this.upOneFloor(floorUser);
                    console.log(`Этаж: ${this._currentFloor}`);
                }
                ;
            }
            ;
        }
        ;
    }
}
;
const elevator = new Elevator(1, 200, 18);
elevator.move();
//# sourceMappingURL=task-2.js.map