interface ISwitchable {
    turnOn: () => void;
    turnOff: () => void;
};

interface IPlayStation extends ISwitchable {
    wifi: boolean;

    getWifi: () => void;

    setWifi: () => void;
};

class PlayStation implements IPlayStation {
    wifi!: boolean;

    setWifi (): void {
        let userWifi: string = prompt('Для подключение сети нажмите "+" \nДля отсоединиеня сети нажмите "-"') || '';

        if(userWifi === '+') {
            this.wifi = true;
        } else if(userWifi === '-') {
            this.wifi = false;
        };
    }

    getWifi (): void {
        if(this.wifi === true) {
            console.log(`
        ___________________________
       |                           |
       |                           |
       |    PS conected server     |
       |                           |
       |          Press S          |
       |___________________________|
           
        PlayStation Подключен к сети`);
        } else if(this.wifi === false) {
            console.log(`
        ___________________________
       |                           |
       |                           |
       |    PS disconected server  |
       |                           |
       |          Press S          |
       |___________________________|
           
       PlayStation не подключен к сети`);
        };
    }

    turnOn (): void {
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

    turnOff (): void {
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
};

const playStation: PlayStation = new PlayStation;

while(true) {
    let userAction: string | null = prompt(`Выберите команду: \nВключить - "+" \nВыключить - "-" \nвключить интернет: "*"`);

    if(userAction === null) {
        break;
    };

    if(userAction === '+') {
        playStation.turnOn();
    } else if(userAction === '-') {
        playStation.turnOff();
    } else if(userAction === '*') {
        playStation.setWifi();
        playStation.getWifi();
    };
};
