"use strict";
;
;
class PlayStation {
    setWifi() {
        let userWifi = prompt('Для подключение сети нажмите "+" \nДля отсоединиеня сети нажмите "-"') || '';
        if (userWifi === '+') {
            this.wifi = true;
        }
        else if (userWifi === '-') {
            this.wifi = false;
        }
        ;
    }
    getWifi() {
        if (this.wifi === true) {
            console.log(`
        ___________________________
       |                           |
       |                           |
       |    PS conected server     |
       |                           |
       |          Press S          |
       |___________________________|
           
        PlayStation Подключен к сети`);
        }
        else if (this.wifi === false) {
            console.log(`
        ___________________________
       |                           |
       |                           |
       |    PS disconected server  |
       |                           |
       |          Press S          |
       |___________________________|
           
       PlayStation не подключен к сети`);
        }
        ;
    }
    turnOn() {
        console.log(`
        ___________________________
       |                           |
       |                           |
       |       Welcom to PS        |
       |                           |
       |          press S          |
       |___________________________|
           
            PlayStation Включен`);
    }
    turnOff() {
        console.log(`
        ___________________________
       |                           |
       |                           |
       |       See you later       |
       |                           |
       |         good bye          |
       |___________________________|
       
            PlayStation выключен`);
    }
}
;
const playStation = new PlayStation;
while (true) {
    let userAction = prompt(`Выберите команду: \nВключить - "+" \nВыключить - "-" \nвключить интернет: "*"`);
    if (userAction === null) {
        break;
    }
    ;
    if (userAction === '+') {
        playStation.turnOn();
    }
    else if (userAction === '-') {
        playStation.turnOff();
    }
    else if (userAction === '*') {
        playStation.setWifi();
        playStation.getWifi();
    }
    ;
}
;
