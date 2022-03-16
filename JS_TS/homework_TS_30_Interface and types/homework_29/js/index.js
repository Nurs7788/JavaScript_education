"use strict";
class Store {
    constructor() {
        this._products = [];
        for (let i = 0; i <= 20; i++) {
            this.getRandomProduct();
        }
        ;
    }
    get products() {
        return this._products;
    }
    set products(products) {
        this._products = products;
    }
    getRandomDeliveryTime() {
        let deliveryTimestamp = new Date(Date.now() - 86400000 * getRandomNumber(1, 200));
        return deliveryTimestamp;
    }
    getRandomStoragePlace() {
        const storageRandom = Math.floor(Math.random() * 2);
        if (storageRandom === 0) {
            return storagePlace.IceBox;
        }
        ;
        return storagePlace.Showcase;
    }
    DoInspection() {
        console.log('\n\n\n\n' + 'Инспекция магазина'.padStart(50) + '\n\n\n\n' + `${getStringRow('Наименование продукта', 'Время прихода', 'Где храниться', 'Срок хранения', 'Годность')}-------------------------+----------------+----------------+----------------+-------------\n${this.products.join('')}-------------------------+----------------+----------------+----------------+-------------`);
    }
    getRandomProduct() {
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
        }
        ;
    }
}
;
class Product {
    constructor(deliveryTimestamp, storagePlace) {
        this._deliveryTimestamp = deliveryTimestamp;
        this._storagePlace = storagePlace;
    }
}
;
var storagePlace;
(function (storagePlace) {
    storagePlace["IceBox"] = "\u0425\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A";
    storagePlace["Showcase"] = "\u0412\u0438\u0442\u0440\u0438\u043D\u0430";
})(storagePlace || (storagePlace = {}));
;
function getStringRow(name, deliveryTimestamp, storagePlace, storageLifeDays, fresh) {
    return `${name.padEnd(25)}| ${deliveryTimestamp.padEnd(15)}| ${storagePlace.padEnd(15)}| ${storageLifeDays.padEnd(15)}| ${fresh.padEnd(6)}\n`;
}
;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
;
class Salt extends Product {
    constructor(deliveryTimestamp, storagePlace) {
        super(deliveryTimestamp, storagePlace);
        this._name = 'Соль';
        this._storageLifeDays = Number.POSITIVE_INFINITY;
    }
    toString() {
        const deliveryTimestamp = this._deliveryTimestamp.toDateString();
        const _storageLifeDays = this._storageLifeDays.toString();
        const fresh = this.isFresh().toString();
        return getStringRow(this._name, deliveryTimestamp, this._storagePlace, _storageLifeDays, fresh);
    }
    isFresh() {
        return true;
    }
}
;
class Fish extends Product {
    constructor(deliveryTimestamp, _storagePlace) {
        super(deliveryTimestamp, _storagePlace);
        this._name = 'Рыба';
        if (this._storagePlace === storagePlace.IceBox) {
            this._storageLifeDays = 20;
        }
        else {
            this._storageLifeDays = 20 / 6;
            this._storageLifeDays = Math.round(this._storageLifeDays);
        }
        ;
    }
    toString() {
        const deliveryTimestamp = this._deliveryTimestamp.toDateString();
        const _storageLifeDays = this._storageLifeDays.toString();
        const fresh = this.isFresh().toString();
        return getStringRow(this._name, deliveryTimestamp, this._storagePlace, _storageLifeDays, fresh);
    }
    isFresh() {
        const difference = Math.round((Date.now() - this._deliveryTimestamp.getTime()) / 86400000);
        if (this._storageLifeDays > difference) {
            return true;
        }
        ;
        return false;
    }
}
;
class Milk extends Product {
    constructor(deliveryTimestamp, _storagePlace) {
        super(deliveryTimestamp, _storagePlace);
        this._name = 'Молоко';
        if (this._storagePlace === storagePlace.IceBox) {
            this._storageLifeDays = 60;
        }
        else {
            this._storageLifeDays = 60 / 2;
        }
        ;
    }
    toString() {
        const deliveryTimestamp = this._deliveryTimestamp.toDateString();
        const _storageLifeDays = this._storageLifeDays.toString();
        const fresh = this.isFresh().toString();
        return getStringRow(this._name, deliveryTimestamp, this._storagePlace, _storageLifeDays, fresh);
    }
    isFresh() {
        const difference = Math.round((Date.now() - this._deliveryTimestamp.getTime()) / 86400000);
        if (this._storageLifeDays > difference) {
            return true;
        }
        ;
        return false;
    }
}
;
class Corn extends Product {
    constructor(deliveryTimestamp, _storagePlace) {
        super(deliveryTimestamp, _storagePlace);
        this._name = 'Кукуруза';
        this._storageLifeDays = 150;
    }
    toString() {
        const deliveryTimestamp = this._deliveryTimestamp.toDateString();
        const _storageLifeDays = this._storageLifeDays.toString();
        const fresh = this.isFresh().toString();
        return getStringRow(this._name, deliveryTimestamp, this._storagePlace, _storageLifeDays, fresh);
    }
    isFresh() {
        const difference = Math.round((Date.now() - this._deliveryTimestamp.getTime()) / 86400000);
        if (this._storageLifeDays > difference) {
            return true;
        }
        ;
        return false;
    }
}
;
class Stew extends Product {
    constructor(deliveryTimestamp, _storagePlace) {
        super(deliveryTimestamp, _storagePlace);
        this._name = 'Тушёнка';
        this._storageLifeDays = 180;
    }
    toString() {
        const deliveryTimestamp = this._deliveryTimestamp.toDateString();
        const _storageLifeDays = this._storageLifeDays.toString();
        const fresh = this.isFresh().toString();
        return getStringRow(this._name, deliveryTimestamp, this._storagePlace, _storageLifeDays, fresh);
    }
    isFresh() {
        const difference = Math.round((Date.now() - this._deliveryTimestamp.getTime()) / 86400000);
        if (this._storageLifeDays > difference) {
            return true;
        }
        ;
        return false;
    }
}
;
const store = new Store();
const salt = new Salt(new Date(), store.getRandomStoragePlace());
const milk = new Milk(new Date(), store.getRandomStoragePlace());
const fish = new Fish(new Date(), store.getRandomStoragePlace());
const corn = new Corn(new Date(), store.getRandomStoragePlace());
const stew = new Stew(new Date(), store.getRandomStoragePlace());
store.DoInspection();
