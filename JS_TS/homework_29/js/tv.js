"use strict";
;
;
class Tv {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    chanel(chanel) {
        switch (chanel) {
            case 1:
                console.log(`
                         \\     /
                          \\   /
                     ______\\_/_______
                    |         TV - 1 |
                    |                |
                    | =++++++++++++= |
                    | =++++++++++++= |
                    | =++++++++++++= |
                    |________________|
                    
                    Телевизор включен`);
                break;
            case 2:
                console.log(`
                         \\     /
                          \\   /
                     ______\\_/_______
                    |         TV - 2 |
                    |                |
                    | =************= |
                    | =************= |
                    | =************= |
                    |________________|
                    
                    Телевизор включен`);
                break;
            case 3:
                console.log(`
                         \\     /
                          \\   /
                     ______\\_/_______
                    |         TV - 3 |
                    |                |
                    | =------------= |
                    | =------------= |
                    | =------------= |
                    |________________|
                    
                    Телевизор включен`);
                break;
            case 4:
                console.log(`
                         \\     /
                          \\   /
                     ______\\_/_______
                    |         TV - 4 |
                    |                |
                    | =############= |
                    | =############= |
                    | =############= |
                    |________________|
                    
                    Телевизор включен`);
                break;
            case 5:
                console.log(`
                         \\     /
                          \\   /
                     ______\\_/_______
                    |         TV - 5 |
                    |                |
                    | =$$$$$$$$$$$$= |
                    | =$$$$$$$$$$$$= |
                    | =$$$$$$$$$$$$= |
                    |________________|
                    
                    Телевизор включен`);
                break;
            default:
                break;
        }
    }
    toChanel() {
        let userChanel = prompt('Выберите канал от 1 до 5') || '';
        if (userChanel === null) {
            console.log(`Отмена`);
        }
        ;
        let chanel = parseInt(userChanel);
        this.chanel(chanel);
    }
    turnOn() {
        console.log(`
                         \\     /
                          \\   /
                     ______\\_/_______
                    |             TV |
                    |                |
                    | ============== |
                    | ============== |
                    | ============== |
                    |________________|
                    
                    Телевизор включен`);
    }
    turnOff() {
        console.log(`
                         \\     /
                          \\   /
                     ______\\_/_______
                    |                |
                    |                |
                    |                |
                    |                |
                    |                |
                    |________________|
                    
                    Телевизор выключен`);
    }
}
;
const tv = new Tv('LG', 1000);
while (true) {
    let userAction = prompt(`Выберите команду: \nВключить - "+" \nВыключить - "-" \nвыбрать канал: "*"`);
    if (userAction === null) {
        break;
    }
    ;
    if (userAction === '+') {
        tv.turnOn();
    }
    else if (userAction === '-') {
        tv.turnOff();
    }
    else if (userAction === '*') {
        tv.toChanel();
    }
    ;
}
;
