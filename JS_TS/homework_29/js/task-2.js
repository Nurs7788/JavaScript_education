"use strict";
;
;
;
class AbstractDoubleSquare {
    getArea() {
        if (this.area === 0) {
            this.area = this.calculateArea();
        }
        ;
        return this.calculateArea();
    }
}
;
class Square {
    constructor(side) {
        this._side = side;
    }
    getSide() {
        return this._side;
    }
}
;
class DoubleSquare extends AbstractDoubleSquare {
    buildDOubleSquare(square1, square2) {
        this._squareFirst = square1.getSide();
        this._squareSecond = square2.getSide();
    }
    calculateArea() {
        return Math.pow(this._squareFirst, 2) + Math.pow(this._squareSecond, 2);
    }
}
;
const square1 = new Square(10);
const square2 = new Square(12);
const doubleSquare = new DoubleSquare();
doubleSquare.buildDOubleSquare(square1, square2);
console.log(`Площадь doublesquare = ${doubleSquare.getArea()}`);
