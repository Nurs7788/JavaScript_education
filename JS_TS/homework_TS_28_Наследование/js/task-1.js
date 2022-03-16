"use strict";
class Figure {
}
;
class Сircle extends Figure {
    constructor(radius) {
        super();
        this._radius = radius;
    }
    calculateArea() {
        let area = Math.floor(Math.PI * (this._radius * this._radius));
        return area;
    }
}
;
class Rectangle extends Figure {
    constructor(height, length) {
        super();
        this._heightRectangle = height;
        this._lengthRectangle = length;
    }
    calculateArea() {
        let area = Math.floor(this._heightRectangle * this._lengthRectangle);
        return area;
    }
}
;
class Trapeze extends Figure {
    constructor(firstBase, secondBase, height) {
        super();
        this._firstBaseTrapeze = firstBase;
        this._secondBaseTrapeze = secondBase;
        this._heightTrapeze = height;
    }
    calculateArea() {
        let area = Math.floor(((this._firstBaseTrapeze + this._secondBaseTrapeze) / 2) * this._heightTrapeze);
        return area;
    }
}
;
const trapeze = new Trapeze(5, 10, 15);
const rectangle = new Rectangle(5, 10);
const circle = new Сircle(5);
const figures = [];
figures.push(`Трапеция: ${trapeze.calculateArea()}`, `Прямоугольник: ${rectangle.calculateArea()}`, `Круг: ${circle.calculateArea()}`);
console.log(figures);
