abstract class TruckState {
    nameState!: string;
    protected _state!: Truck  ;
    public setTruck(state: Truck): void {
        this._state = state
    }

    public abstract сhangeDriver (): void;
    public abstract startRun (): void;
    public abstract startRepair (): void;
};

class InBaseState extends TruckState {
    nameState: string = 'На базе';

    public сhangeDriver(): void {
        console.log(`Водитель сменён`);
    }

    public startRun(): void {
        this._state.changeState(new InRunState());
        console.log('В пути');
    }

    public startRepair(): void {
        this._state.changeState(new InRepairState());
        console.log('В ремонте');
    }
};


class InRunState extends TruckState {
    nameState: string = 'В пути';

    public сhangeDriver(): void {
        console.log(`Нельзя менять водителя в пути`);
    }

    public startRun(): void {
        console.log('Ошибка! Грузовик в пути');
    }

    public startRepair(): void {
        this._state.changeState(new InRepairState());
        console.log('В ремонте');
    }
};

class InRepairState extends TruckState {
    nameState: string = 'На ремонте';

    public сhangeDriver(): void {
        console.log(`Нельзя менять водителя пока грузовик находиться на ремонте`);
    }

    public startRun(): void {
        let randomState: number = 0;
        function randomStates(): number {
            return randomState = Math.floor(Math.random() * 100);
        };
        randomStates();

        if(randomState > 50) {
            this._state.changeState(new InBaseState());
            console.log('На базе');
        };
        this._state.changeState(new InRunState());
        console.log(`В пути`);
    }

    public startRepair(): void {
        console.log('Ошибка! Грузовик уже в ремонте');
    }
};

class Truck {
    id: number;
    name: string;
    driver: Driver;
    state!: TruckState;
    stringState: string;

    public setState(stateTruck: TruckState): void {
        this.state = stateTruck;
    }

    public changeState(stateTruck: TruckState): void {
        this.state = stateTruck;
        this.state.setTruck(this)
        this.stringState = this.state.nameState;
    }

    constructor(idTruck: number, nameTruck: string, driverTruck: Driver) {
        this.id = idTruck;
        this.name = nameTruck;
        this.driver = driverTruck;
        this.stringState = 'На базе';
        this.changeState(new InBaseState());
    }

    public startRun(): void {
        this.state.startRun();
    }

    public changeDriver(): void {
        this.state.сhangeDriver();
    }

    public startRepair(): void {
        this.state.startRepair();
    }
};

class Driver {
    name: string;
    surname: string;
    age: number;
    experience: number;
    
    constructor(nameDriver: string, surnameDriver: string, ageDriver: number, experienceDriver: number) {
        this.name = nameDriver;
        this.surname = surnameDriver;
        this.age = ageDriver;
        this.experience = experienceDriver;
    }
};

const john = new Driver("John", "Doe", 35, 10);
const jack = new Driver("Jack", "Rose", 55, 30);
const jane = new Driver("Jane", "McClein", 45, 15);
 
const renault = new Truck(1, "Renault Magnum", john);
const volvo = new Truck(2, "Volvo FH12", jack);
const daf = new Truck(3, "DAF XF", jane);
 
const trucks: Truck[] = [renault, volvo, daf];


function tableState(): void { console.log('№'.padEnd(5) + '|' + 'Грузовик'.padEnd(18) + '|' + 'Водитель'.padEnd(13) + '|' + 'Состояние '.padEnd(15) + '\n\n' + renault.id + '|'.padStart(5) + renault.name + '|'.padStart(5) + john.name + '|'.padStart(10) + renault.stringState + '\n' + volvo.id + '|'.padStart(5) + volvo.name + '|'.padStart(9) + jack.name + '|'.padStart(10) + volvo.stringState + '\n' + daf.id + '|'.padStart(5) + daf.name + '|'.padStart(13) + jane.name + '|'.padStart(10) +  daf.stringState); };

function menu(): void {
    while(true){
        const menuComand: string | null = prompt('Выберите действие:\n1 - Отобразить текущее состояние грузовиков\n2 - Показать данные грузовика по id\n3 - Обновить состояние грузовика\n4 - Завершить работу');
        if(menuComand === null) break;

        switch (menuComand) {
            case '1':
                tableState();
                break;
            case '2':
                let idNumber: string | null | number = prompt('Введите ID Грузовика:');
                if(idNumber === null) break;

                idNumber = parseInt(idNumber);
                if(idNumber === 1) {
                    console.log(`№            | ${renault.id}\nМарка        | ${renault.name}\nВодитель     | ${john.name}\nСостояние    | ${renault.stringState}`);
                    break;;
                } else if(idNumber === 2) {
                    console.log(`№            | ${volvo.id}\nМарка        | ${volvo.name}\nВодитель     | ${jack.name}\nСостояние    | ${volvo.stringState}`);
                    break;;
                } else if(idNumber === 3){
                    console.log(`№            | ${daf.id}\nМарка        | ${daf.name}\nВодитель     | ${jane.name}\nСостояние    | ${daf.stringState}`);
                    break;;
                };
                break;
            case '3':
                let repair: string | null | number = prompt('Укажите номер грузовика и состояние через пробел:' + '\n1 - reanult' + '\n2 - volvo' +  '\n3 - daf' + '\n-----------------------------' +'\nотправить в путь - run' + '\nотправить на ремонт - repair' + '\nпоменять водителя - changeDriver');
                if(repair === null) break;

                let repairComand: string[] = repair.split(' ');

                if(repairComand[0] === '1' && repairComand[1] === 'run') {
                    renault.startRun();
                } else if(repairComand[0] === '1' && repairComand[1] === 'repair') {
                    renault.startRepair();
                } else if(repairComand[0] === '1' && repairComand[1] === 'changeDriver') {
                    renault.changeDriver();
                };

                if(repairComand[0] === '2' && repairComand[2] === 'run') {
                    volvo.startRun();
                } else if(repairComand[0] === '2' && repairComand[2] === 'repair') {
                    volvo.startRepair();
                } else if(repairComand[0] === '2' && repairComand[2] === 'changeDriver') {
                    volvo.changeDriver();
                };

                if(repairComand[0] === '3' && repairComand[2] === 'run') {
                    daf.startRun();
                } else if(repairComand[0] === '3' && repairComand[2] === 'repair') {
                    daf.startRepair();
                } else if(repairComand[0] === '3' && repairComand[2] === 'changeDriver') {
                    daf.changeDriver();
                };
                break;
            case '4':
                return;
            default:
                break;
        };
    };
};

menu();