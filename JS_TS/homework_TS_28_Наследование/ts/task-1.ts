abstract class Figure {

    public abstract calculateArea(): number;
};

class Сircle extends Figure {
    protected _radius: number;

    constructor(radius: number) {
        super();
        this._radius = radius;
    }

    public calculateArea(): number {
        let area: number = Math.floor(Math.PI * (this._radius * this._radius));
        return area;
    }
};

class Rectangle extends Figure {
    protected _heightRectangle: number;
    protected _lengthRectangle: number;

    constructor(height: number, length: number) {
        super();

        this._heightRectangle = height;
        this._lengthRectangle = length;
    }
    
    public calculateArea(): number {
        let area: number = Math.floor(this._heightRectangle * this._lengthRectangle);
        return area;
    }
};

class Trapeze extends Figure {
    protected _firstBaseTrapeze: number;
    protected _secondBaseTrapeze: number;
    protected _heightTrapeze: number;

    constructor(firstBase: number, secondBase: number, height: number) {
        super();
        this._firstBaseTrapeze = firstBase;
        this._secondBaseTrapeze = secondBase;
        this._heightTrapeze = height;
    }

    public calculateArea(): number {
        let area: number = Math.floor(((this._firstBaseTrapeze + this._secondBaseTrapeze) / 2) * this._heightTrapeze);
        return area;
    }
};

const trapeze: Trapeze = new Trapeze(5, 10, 15);

const rectangle: Rectangle = new Rectangle(5, 10);

const circle: Сircle = new Сircle(5);

const figures: number | string[] = [];

figures.push(`Трапеция: ${trapeze.calculateArea()}`, `Прямоугольник: ${rectangle.calculateArea()}`, `Круг: ${circle.calculateArea()}`);

console.log(figures);