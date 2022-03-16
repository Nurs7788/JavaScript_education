let timeFromUser = prompt('Введите оставшиеся секунды:');

let timeHours = timeFromUser / 3600;

let time = Math.floor(timeHours);

if(timeHours > 3) {
    alert(`${timeFromUser} секунд \nосталось ${time} часов`);
} else if(timeHours > 2) {
    alert(`${timeFromUser} секунд \nосталось ${time} часа`);
} else if(timeHours > 1) {
    alert(`${timeFromUser} секунд \nостался ${time} час`);
} else {
    alert(`${timeFromUser} секунд \nосталось менее часа`);
};