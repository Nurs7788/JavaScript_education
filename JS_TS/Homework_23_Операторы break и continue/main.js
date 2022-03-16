const someWords = ["парта", "лошадь", "рыба", "кошка", "компьютер", "волна", "портрет", "корабль", "космос", "интернет", "цепочка", "программа", "катастофа", "макака", "прекрасный", "динозавр", "компьютер", "оладушек", "индекс",
"школа", "интроверт", "вертолёт", "институт", "природа", "алфавит", "мумия", "почемучка", "верба", "гомодрил", "куратор", "поле",
"исполнитель", "закзчик", "альтернатива", "кавычки", "строка", "ноль", "животноводство", "абсолютный"];

const Game = {
    correctAnswer: [],
    lives: 9,
    result: 0,
    random: '',
    randLength: 0,
    answerFromUser: '',
    randomWord: function () {
         this.random = someWords[Math.floor(Math.random() * someWords.length)];
         this.randLength = this.random.length;
    },
    answer: function () {
        for(let i = 0; i < this.random.length; i++) {
            this.correctAnswer.push('_');
        };
        return this.correctAnswer;
    },
    stateOfPlay: function() {
        alert(`Жизней осталось ${this.lives} \n${this.correctAnswer.join(' ')} \nОсталось ${this.randLength} букв`);
    },
    gamePlay: function () {
        while(true) {
            this.lives--;
            this.stateOfPlay();
            this.result++;
            this.answerFromUser = prompt('Введите букву или нажмите "Отмену" для выхода.');
            
            if(this.answerFromUser === null) {
                alert('Игра закончена.');
                break;
            } else if (this.answerFromUser.length !== 1) {
                alert('Можно вести только не больше одной буквы.');
            } else {
                this.answerFromUser = this.answerFromUser.toLowerCase();
                for(let i = 0; i < this.random.length; i++) {
                    if(this.random[i] === this.answerFromUser) {
                        this.correctAnswer[i] = this.answerFromUser;
                        this.randLength--;
                    };
                };
            };
            if(this.lives === 0 && this.randLength > 0) {
                alert('Вы умерли.');
                break;
            } else if (this.randLength === 0) {
                alert(`Вы остались в живых. С ${this.result} попытки`);
                break;
            };
        };
    }
};

Game.randomWord();
Game.answer();
Game.gamePlay();
