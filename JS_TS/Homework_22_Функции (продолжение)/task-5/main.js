const Lift = {
    floor: 1,
    upOneFloor: function() {
        if(this.floor < 16) {
            this.floor = this.floor + 1;
            this.printFloor();
        }else {
            return console.log('Вы на нужном этаже');
        };
    },
    downOneFloor: function() {
        if(this.floor > 1) {
            this.floor = this.floor - 1;
            this.printFloor();
        }else {
            return console.log('Вы на нужном этаже.');
        };
    },
    printFloor: function() {
        console.log(`Этаж ${this.floor}`);
        return `Лифт находиться на ${this.floor}`;
    },
    toFloor: function(floorNumber) {
        this.printFloor();
        while(this.floor !== floorNumber) {
            if(floorNumber > 16) {
                console.log(`Нельзя пробить потолок.`);
                break;
            } else if(floorNumber < 1) {
                console.log(`Нельзя пробить дно.`);
                break;
            };

            if(floorNumber <= this.floor) {
                this.downOneFloor();
            } else if(floorNumber >= this.floor) {
                this.upOneFloor();
            };
        };
        return this.printFloor();
    }
};
