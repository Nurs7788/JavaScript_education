const totalGuestList = ['Harry', 'Tony', 'John', 'Putin', 'Obama', 'Tyson', 'Messi', 'Ronaldo', 'Mbape', 'Marcus', 'Mason'];

const Host = {
    guestList: [],
    setGuestList: function(guests) {
        for(let i = 0; i < guests.length; i++) {
            let probability = Math.floor(Math.random() * 100);
            if(probability < 80) {
                this.guestList.push(guests[i]);
            };
        };
        return alert(`В списке гостей были ${guests.length} персон \nХозяин вечеринки в итоге решил позвать только ${this.guestList} \nВ итоге в списке ${this.guestList.length} персон.`);
    }
};

Host.setGuestList(totalGuestList);