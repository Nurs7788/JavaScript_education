class Elevator  {
    private _currentFloor: number;
    private _capacity: number;
    private _maxFloor: number;

    constructor(currentFloor: number, capacity: number, maxFloor: number) {
        this._currentFloor = currentFloor;
        this._capacity = capacity;
        this._maxFloor = maxFloor;
    }
    public get currentFloor(): number {
        return this._currentFloor;
    }

    public set currentFloor(currentFloor: number) {
        this._currentFloor = currentFloor;
    }

    public get capacity(): number {
        return this._capacity;
    }

    public set capacity(capacity: number) {
        this._capacity = capacity;
    }

    public get maxFloor(): number {
        return this._maxFloor;
    }

    public set maxFloor(maxFloor: number) {
        this._maxFloor = maxFloor;
    }

    upOneFloor(floor: number): void {
        if(this.isAllowableFloor(floor) === false) {
            console.log('Ошибка');
            return;
        };
        this._currentFloor++;
    }

    downOneFloor(floor: number): void {
        if(this.isAllowableFloor(floor) === false) {
            console.log('Ошибка');
            return;
        };
        this._currentFloor --;
    }

    isAllowableWeight(weight: number): boolean {
        if(weight > this._capacity) {
            return false;
        };
        return true;
    }

    isAllowableFloor(floor: number): boolean {
        if(floor > this._maxFloor || floor < 1) {
            return false;
        };
        return true;
    }

    move(): void {
        while(true) {
            console.log(`Вы находитесь на этаже: ${this._currentFloor}`);

            let floorFromUser: string | null = prompt('Введите этаж:');

            let weightFromUser: string | null = prompt('Введите вес:');

            if(floorFromUser === null) break;

            if(weightFromUser === null) break;

            let floorUser: number = parseInt(floorFromUser);

            if(this.isAllowableFloor(floorUser) === false) {
                console.log('Ошибка');
                return;
            };

            let weightUser: number = parseInt(weightFromUser);

            if(this.isAllowableWeight(weightUser) === false) {
                console.log('Слишком большой вес');
                return;
            };

            if(isNaN(floorUser) === true || isNaN(weightUser) === true) {
                console.log('Вы ввели не числовое значение');
                break;
            };

            while(floorUser != this._currentFloor) {
            if(floorUser < this._currentFloor) {
                this.downOneFloor(floorUser);
                console.log(`Этаж: ${this._currentFloor}`);
            } else if(floorUser > this._currentFloor) {
                this.upOneFloor(floorUser);
                console.log(`Этаж: ${this._currentFloor}`);
            };
        };
        };
    }
};

const elevator: Elevator = new Elevator(1, 200, 18);

elevator.move();