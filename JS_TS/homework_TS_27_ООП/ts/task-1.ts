class Tv {
    private _currentChanell: number;
    private _channelLimit: number;

    constructor(currentChanell: number, channelLimit: number) {
        this._currentChanell = currentChanell;
        this._channelLimit = channelLimit;
    }

    nextChannel(): void {
        if(this._currentChanell >= this._channelLimit) {
            alert('Канал не найден');
        }else {
            this._currentChanell += 1;
        };
    }

    previousChannel(): void {
        if(this._currentChanell < 0) {
            alert('Канал не найден');
        }else {
            this._currentChanell -= 1;
        };
    }

    moveToChannel(channel: number): void {
        if(this._currentChanell < 0 || channel > this._channelLimit) {
            alert('Канал не найден');
        }else {
            this._currentChanell = channel;
        };
    }

    public get channel(): number {
        return this._currentChanell;
    }

    public set channel(channel: number) {
        this._currentChanell = channel;
    }

    public get channelLimit(): number {
        return this._channelLimit;
    }

    public set channelLimit(limit: number) {
        this._channelLimit = limit;
    }
};

const tv: Tv = new Tv(1, 50);

while(true) {
    alert(`Канал: ${tv.channel}`);

    let commandFromUser: string | null = prompt('Для перехода на следующий канал нажмите: ">" \nДля перехода на преведущий канал нажмите: "<" \nДля перехода на нужный вам канал нажмите: "+" \nДля выключения телевизора нажмите: "Отмена"');

    if(commandFromUser === null) {
        alert('Телевизор выключен');
        break;
    } else if(commandFromUser === '>') {
        tv.nextChannel();
        console.log(`Канал: ${tv.channel}`);
    } else if(commandFromUser === '<') {
        tv.previousChannel();
        console.log(`Канал: ${tv.channel}`);
    } else if(commandFromUser === '+') {
        let channelFromUser: number = parseInt(prompt('Введите номер канала') || '');
        tv.moveToChannel(channelFromUser);
        console.log(`Канал: ${tv.channel}`);
    };
};