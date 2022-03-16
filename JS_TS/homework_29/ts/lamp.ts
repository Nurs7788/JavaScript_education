interface ISwitchable {
    turnOn: () => void;
    turnOff: () => void;
};

interface ILamp extends ISwitchable {
    brightColor: string;

    bright: (value: string) => string;
    getInfo: () => void;
};

class Lamp implements ILamp {
    brightColor: string;

    constructor (bright: string) {
        this.brightColor = bright;
    }

    bright (bright: string): string {
        return this.brightColor = bright;
    }

    getInfo (): void {
        console.log(`Цвет освещения: ${this.brightColor}`);
    }

    turnOn (): void {
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

    turnOff (): void {
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
};

const lamp: Lamp = new Lamp('White');

while(true) {
    let userAction: string | null = prompt(`Выберите команду: \nВключить - "+" \nВыключить - "-" \nвыбрать цвет: "*"`);

    if(userAction === null) {
        break;
    };

    if(userAction === '+') {
        lamp.turnOn();
    } else if(userAction === '-') {
        lamp.turnOff();
    } else if(userAction === '*') {
        let color: string | null = prompt(`Напишите цвет:`);

        if(color === null) break;

        lamp.bright(color);
        lamp.getInfo();
    };
};