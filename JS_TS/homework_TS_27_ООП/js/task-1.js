"use strict";
class Tv {
    constructor(currentChanell, channelLimit) {
        this._currentChanell = currentChanell;
        this._channelLimit = channelLimit;
    }
    nextChannel() {
        if (this._currentChanell >= this._channelLimit) {
            alert('Канал не найден');
        }
        else {
            this._currentChanell += 1;
        }
        ;
    }
    previousChannel() {
        if (this._currentChanell < 0) {
            alert('Канал не найден');
        }
        else {
            this._currentChanell -= 1;
        }
        ;
    }
    moveToChannel(channel) {
        if (this._currentChanell < 0 || channel > this._channelLimit) {
            alert('Канал не найден');
        }
        else {
            this._currentChanell = channel;
        }
        ;
    }
    get channel() {
        return this._currentChanell;
    }
    set channel(channel) {
        this._currentChanell = channel;
    }
    get channelLimit() {
        return this._channelLimit;
    }
    set channelLimit(limit) {
        this._channelLimit = limit;
    }
}
;
const tv = new Tv(1, 50);
while (true) {
    alert(`Канал: ${tv.channel}`);
    let commandFromUser = prompt('Для перехода на следующий канал нажмите: ">" \nДля перехода на преведущий канал нажмите: "<" \nДля перехода на нужный вам канал нажмите: "+" \nДля выключения телевизора нажмите: "Отмена"');
    if (commandFromUser === null) {
        alert('Телевизор выключен');
        break;
    }
    else if (commandFromUser === '>') {
        tv.nextChannel();
        console.log(`Канал: ${tv.channel}`);
    }
    else if (commandFromUser === '<') {
        tv.previousChannel();
        console.log(`Канал: ${tv.channel}`);
    }
    else if (commandFromUser === '+') {
        let channelFromUser = parseInt(prompt('Введите номер канала') || '');
        tv.moveToChannel(channelFromUser);
        console.log(`Канал: ${tv.channel}`);
    }
    ;
}
;
//# sourceMappingURL=task-1.js.map