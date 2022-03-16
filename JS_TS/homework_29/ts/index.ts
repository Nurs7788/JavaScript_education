class Store {
    private _products: Product[] = [];

    public get products(): Product[] {
        return this._products;
    }

    public set products(products: Product[]) {
        this._products = products;
    }

    constructor() {
        for (let i = 0; i <= 20; i++) {
            this.getRandomProduct();
        };
    }

    getRandomDeliveryTime(): Date {
        let deliveryTimestamp: Date = new Date(Date.now() - 86400000 * getRandomNumber(1, 200))
        return deliveryTimestamp;
    }

    getRandomStoragePlace(): storagePlace {
        const storageRandom = Math.floor(Math.random() * 2);

        if (storageRandom === 0) {
            return storagePlace.IceBox;
        };
        return storagePlace.Showcase;
    }

    public DoInspection(): void {
        console.log('\n\n\n\n' + 'Инспекция магазина'.padStart(50) + '\n\n\n\n' + `${getStringRow('Наименование продукта', 'Время прихода', 'Где храниться', 'Срок хранения', 'Годность')}-------------------------+----------------+----------------+----------------+-------------\n${this.products.join('')}-------------------------+----------------+----------------+----------------+-------------`);
    }

    getRandomProduct(): number | undefined {
        const randomProducts = getRandomNumber(1, 5);

        switch (randomProducts) {
            case 1:
                return this._products.push(new Salt(this.getRandomDeliveryTime(), this.getRandomStoragePlace()));

            case 2:
                return this._products.push(new Milk(this.getRandomDeliveryTime(), this.getRandomStoragePlace()));

            case 3:
                return this._products.push(new Fish(this.getRandomDeliveryTime(), this.getRandomStoragePlace()));

            case 4:
                return this._products.push(new Corn(this.getRandomDeliveryTime(), this.getRandomStoragePlace()));

            case 5:
                return this._products.push(new Stew(this.getRandomDeliveryTime(), this.getRandomStoragePlace()));

            case 6:
            default:
                break;
        };
    }
};

abstract class Product {
    protected abstract _name: string;
    protected abstract _storageLifeDays: number;
    protected _deliveryTimestamp: Date;
    protected _storagePlace: storagePlace;

    constructor(deliveryTimestamp: Date, storagePlace: storagePlace) {
        this._deliveryTimestamp = deliveryTimestamp;
        this._storagePlace = storagePlace;
    }

    abstract isFresh(): boolean;
};

enum storagePlace {
    IceBox = 'Холодильник',
    Showcase = 'Витрина'
};

function getStringRow(name: string, deliveryTimestamp: string, storagePlace: string, storageLifeDays: string, fresh: string): string {
    return `${name.padEnd(25)}| ${deliveryTimestamp.padEnd(15)}| ${storagePlace.padEnd(15)}| ${storageLifeDays.padEnd(15)}| ${fresh.padEnd(6)}\n`
};

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

class Salt extends Product {
    protected _name: string;
    protected _storageLifeDays: number;

    constructor(deliveryTimestamp: Date, storagePlace: storagePlace) {
        super(deliveryTimestamp, storagePlace);
        this._name = 'Соль';
        this._storageLifeDays = Number.POSITIVE_INFINITY;
    }

    toString(): string {
        const deliveryTimestamp: string = this._deliveryTimestamp.toDateString();
        const _storageLifeDays: string = this._storageLifeDays.toString();
        const fresh: string = this.isFresh().toString();
        return getStringRow(this._name, deliveryTimestamp, this._storagePlace, _storageLifeDays, fresh);
    }

    isFresh(): boolean {
        return true;
    }
};

class Fish extends Product {
    protected _name: string;
    protected _storageLifeDays: number;

    constructor(deliveryTimestamp: Date, _storagePlace: storagePlace) {
        super(deliveryTimestamp, _storagePlace);
        this._name = 'Рыба';
        if (this._storagePlace === storagePlace.IceBox) {
            this._storageLifeDays = 20
        } else {
            this._storageLifeDays = 20 / 6
            this._storageLifeDays = Math.round(this._storageLifeDays);
        };
    }

    toString(): string {
        const deliveryTimestamp: string = this._deliveryTimestamp.toDateString();
        const _storageLifeDays: string = this._storageLifeDays.toString();
        const fresh: string = this.isFresh().toString();
        return getStringRow(this._name, deliveryTimestamp, this._storagePlace, _storageLifeDays, fresh);
    }

    isFresh(): boolean {
        const difference: number = Math.round((Date.now() - this._deliveryTimestamp.getTime()) / 86400000);

        if (this._storageLifeDays > difference) {
            return true;
        };
        return false;
    }
};

class Milk extends Product {
    protected _name: string;
    protected _storageLifeDays: number;

    constructor(deliveryTimestamp: Date, _storagePlace: storagePlace) {
        super(deliveryTimestamp, _storagePlace);
        this._name = 'Молоко';
        if (this._storagePlace === storagePlace.IceBox) {
            this._storageLifeDays = 60
        } else {
            this._storageLifeDays = 60 / 2
        };
    }

    toString(): string {
        const deliveryTimestamp: string = this._deliveryTimestamp.toDateString();
        const _storageLifeDays: string = this._storageLifeDays.toString();
        const fresh: string = this.isFresh().toString();
        return getStringRow(this._name, deliveryTimestamp, this._storagePlace, _storageLifeDays, fresh);
    }

    isFresh(): boolean {
        const difference: number = Math.round((Date.now() - this._deliveryTimestamp.getTime()) / 86400000);

        if (this._storageLifeDays > difference) {
            return true;
        };
        return false;
    }
};

class Corn extends Product {
    protected _name: string;
    protected _storageLifeDays: number;

    constructor(deliveryTimestamp: Date, _storagePlace: storagePlace) {
        super(deliveryTimestamp, _storagePlace);
        this._name = 'Кукуруза';
        this._storageLifeDays = 150;
    }

    toString(): string {
        const deliveryTimestamp: string = this._deliveryTimestamp.toDateString();
        const _storageLifeDays: string = this._storageLifeDays.toString();
        const fresh: string = this.isFresh().toString();
        return getStringRow(this._name, deliveryTimestamp, this._storagePlace, _storageLifeDays, fresh);
    }

    isFresh(): boolean {
        const difference: number = Math.round((Date.now() - this._deliveryTimestamp.getTime()) / 86400000);

        if (this._storageLifeDays > difference) {
            return true;
        };
        return false;
    }
};

class Stew extends Product {
    protected _name: string;
    protected _storageLifeDays: number;

    constructor(deliveryTimestamp: Date, _storagePlace: storagePlace) {
        super(deliveryTimestamp, _storagePlace);
        this._name = 'Тушёнка';
        this._storageLifeDays = 180;
    }

    toString(): string {
        const deliveryTimestamp: string = this._deliveryTimestamp.toDateString();
        const _storageLifeDays: string = this._storageLifeDays.toString();
        const fresh: string = this.isFresh().toString();
        return getStringRow(this._name, deliveryTimestamp, this._storagePlace, _storageLifeDays, fresh);
    }

    isFresh(): boolean {
        const difference: number = Math.round((Date.now() - this._deliveryTimestamp.getTime()) / 86400000);

        if (this._storageLifeDays > difference) {
            return true;
        };
        return false;
    }
};


const store = new Store();

const salt = new Salt(new Date(), store.getRandomStoragePlace());
const milk = new Milk(new Date(), store.getRandomStoragePlace());
const fish = new Fish(new Date(), store.getRandomStoragePlace());
const corn = new Corn(new Date(), store.getRandomStoragePlace());
const stew = new Stew(new Date(), store.getRandomStoragePlace());

store.DoInspection();