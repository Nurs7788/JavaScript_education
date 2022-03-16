"use strict";
;
;
class Lamp {
    constructor(bright) {
        this.brightColor = bright;
    }
    bright(bright) {
        return this.brightColor = bright;
    }
    getInfo() {
        console.log(`Цвет освещения: ${this.brightColor}`);
    }
    turnOn() {
        console.log(`
        ____________
       /            \\
      /              \\
     /                \\
    /                  \\
   /____________________\\
     / / / / | \\ \\ \\ \\
    / / / /  |  \\ \\ \\ \\
             |
             |
             |
      _______|______
        
        Лампа включена`);
    }
    turnOff() {
        console.log(`
         ____________
        /            \\
       /              \\
      /                \\
     /                  \\
    /____________________\\
               | 
               |  
               |
               |
               |
        _______|______
        
        Лампа выключена`);
    }
}
;
const lamp = new Lamp('White');
while (true) {
    let userAction = prompt(`Выберите команду: \nВключить - "+" \nВыключить - "-" \nвыбрать цвет: "*"`);
    if (userAction === null) {
        break;
    }
    ;
    if (userAction === '+') {
        lamp.turnOn();
    }
    else if (userAction === '-') {
        lamp.turnOff();
    }
    else if (userAction === '*') {
        let color = prompt(`Напишите цвет:`);
        if (color === null)
            break;
        lamp.bright(color);
        lamp.getInfo();
    }
    ;
}
;
