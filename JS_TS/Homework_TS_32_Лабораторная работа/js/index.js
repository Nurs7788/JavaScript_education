"use strict";
class TruckState {
    setTruck(state) {
        this._state = state;
    }
}
;
class InBaseState extends TruckState {
    constructor() {
        super(...arguments);
        this.nameState = 'На базе';
    }
    сhangeDriver() {
        console.log(`Водитель сменён`);
    }
    startRun() {
        this._state.changeState(new InRunState());
        console.log('В пути');
    }
    startRepair() {
        this._state.changeState(new InRepairState());
        console.log('В ремонте');
    }
}
;
class InRunState extends TruckState {
    constructor() {
        super(...arguments);
        this.nameState = 'В пути';
    }
    сhangeDriver() {
        console.log(`Нельзя менять водителя в пути`);
    }
    startRun() {
        console.log('Ошибка! Грузовик в пути');
    }
    startRepair() {
        this._state.changeState(new InRepairState());
        console.log('В ремонте');
    }
}
;
class InRepairState extends TruckState {
    constructor() {
        super(...arguments);
        this.nameState = 'На ремонте';
    }
    сhangeDriver() {
        console.log(`Нельзя менять водителя пока грузовик находиться на ремонте`);
    }
    startRun() {
        let randomState = 0;
        function randomStates() {
            return randomState = Math.floor(Math.random() * 100);
        }
        ;
        randomStates();
        if (randomState > 50) {
            this._state.changeState(new InBaseState());
            console.log('На базе');
        }
        ;
        this._state.changeState(new InRunState());
        console.log(`В пути`);
    }
    startRepair() {
        console.log('Ошибка! Грузовик уже в ремонте');
    }
}
;
class Truck {
    constructor(idTruck, nameTruck, driverTruck) {
        this.id = idTruck;
        this.name = nameTruck;
        this.driver = driverTruck;
        this.stringState = 'На базе';
        this.changeState(new InBaseState());
    }
    setState(stateTruck) {
        this.state = stateTruck;
    }
    changeState(stateTruck) {
        this.state = stateTruck;
        this.state.setTruck(this);
        this.stringState = this.state.nameState;
    }
    startRun() {
        this.state.startRun();
    }
    changeDriver() {
        this.state.сhangeDriver();
    }
    startRepair() {
        this.state.startRepair();
    }
}
;
class Driver {
    constructor(nameDriver, surnameDriver, ageDriver, experienceDriver) {
        this.name = nameDriver;
        this.surname = surnameDriver;
        this.age = ageDriver;
        this.experience = experienceDriver;
    }
}
;
const john = new Driver("John", "Doe", 35, 10);
const jack = new Driver("Jack", "Rose", 55, 30);
const jane = new Driver("Jane", "McClein", 45, 15);
const renault = new Truck(1, "Renault Magnum", john);
const volvo = new Truck(2, "Volvo FH12", jack);
const daf = new Truck(3, "DAF XF", jane);
const trucks = [renault, volvo, daf];
function tableState() { console.log('№'.padEnd(5) + '|' + 'Грузовик'.padEnd(18) + '|' + 'Водитель'.padEnd(13) + '|' + 'Состояние '.padEnd(15) + '\n\n' + renault.id + '|'.padStart(5) + renault.name + '|'.padStart(5) + john.name + '|'.padStart(10) + renault.stringState + '\n' + volvo.id + '|'.padStart(5) + volvo.name + '|'.padStart(9) + jack.name + '|'.padStart(10) + volvo.stringState + '\n' + daf.id + '|'.padStart(5) + daf.name + '|'.padStart(13) + jane.name + '|'.padStart(10) + daf.stringState); }
;
function menu() {
    while (true) {
        const menuComand = prompt('Выберите действие:\n1 - Отобразить текущее состояние грузовиков\n2 - Показать данные грузовика по id\n3 - Обновить состояние грузовика\n4 - Завершить работу');
        if (menuComand === null)
            break;
        switch (menuComand) {
            case '1':
                tableState();
                break;
            case '2':
                let idNumber = prompt('Введите ID Грузовика:');
                if (idNumber === null)
                    break;
                idNumber = parseInt(idNumber);
                if (idNumber === 1) {
                    console.log(`№            | ${renault.id}\nМарка        | ${renault.name}\nВодитель     | ${john.name}\nСостояние    | ${renault.stringState}`);
                    break;
                    ;
                }
                else if (idNumber === 2) {
                    console.log(`№            | ${volvo.id}\nМарка        | ${volvo.name}\nВодитель     | ${jack.name}\nСостояние    | ${volvo.stringState}`);
                    break;
                    ;
                }
                else if (idNumber === 3) {
                    console.log(`№            | ${daf.id}\nМарка        | ${daf.name}\nВодитель     | ${jane.name}\nСостояние    | ${daf.stringState}`);
                    break;
                    ;
                }
                ;
                break;
            case '3':
                let repair = prompt('Укажите номер грузовика и состояние через пробел:' + '\n1 - reanult' + '\n2 - volvo' + '\n3 - daf' + '\n-----------------------------' + '\nотправить в путь - run' + '\nотправить на ремонт - repair' + '\nпоменять водителя - changeDriver');
                if (repair === null)
                    break;
                let repairComand = repair.split(' ');
                if (repairComand[0] === '1' && repairComand[1] === 'run') {
                    renault.startRun();
                }
                else if (repairComand[0] === '1' && repairComand[1] === 'repair') {
                    renault.startRepair();
                }
                else if (repairComand[0] === '1' && repairComand[1] === 'changeDriver') {
                    renault.changeDriver();
                }
                ;
                if (repairComand[0] === '2' && repairComand[2] === 'run') {
                    volvo.startRun();
                }
                else if (repairComand[0] === '2' && repairComand[2] === 'repair') {
                    volvo.startRepair();
                }
                else if (repairComand[0] === '2' && repairComand[2] === 'changeDriver') {
                    volvo.changeDriver();
                }
                ;
                if (repairComand[0] === '3' && repairComand[2] === 'run') {
                    daf.startRun();
                }
                else if (repairComand[0] === '3' && repairComand[2] === 'repair') {
                    daf.startRepair();
                }
                else if (repairComand[0] === '3' && repairComand[2] === 'changeDriver') {
                    daf.changeDriver();
                }
                ;
                break;
            case '4':
                return;
            default:
                break;
        }
        ;
    }
    ;
}
;
menu();
