"use strict";
;
let movies = [
    {
        filmName: 'унесенный ветром',
        ratings: {
            Mason: 10,
            John: 5
        },
    },
    {
        filmName: 'человек паук: нет пути домой',
        ratings: {
            Marcus: 10,
            Harry: 7
        },
    },
];
function findIndexArr(filmToUser) {
    return movies.findIndex((movie) => movie.filmName == filmToUser);
}
;
function add(filmToUser) {
    if (findIndexArr(filmToUser) == -1) {
        let filmToPush = {
            filmName: filmToUser,
            ratings: {}
        };
        movies.push(filmToPush);
    }
    else {
        alert('Такой фильм уже есть.');
    }
    ;
}
;
function del(filmToUser) {
    if (findIndexArr(filmToUser) == -1) {
        alert('Нельзя удалить фильм, которого нет');
    }
    else {
        movies.forEach(movie => movie.filmName === filmToUser && movies.splice(movies.indexOf(movie), 1));
    }
    ;
}
;
function rate(filmName, Array) {
    const indexArr = findIndexArr(filmName);
    if (indexArr == -1) {
        alert('К сожелению такого фильма нет.');
    }
    else {
        let userName = prompt('Введите ваше имя:');
        if (userName === null)
            return;
        let userRate = prompt('Введите рейтинг от 1 до 10:');
        if (userRate === null)
            return;
        let userRates = parseInt(userRate);
        if (userRates < 1 || userRates > 10) {
            alert('Пожалуйста введите рейтинг строго от 1 до 10.');
        }
        else {
            Array[indexArr].ratings[userName] = userRates;
        }
        ;
    }
    ;
}
;
function arrRatings(ratings) {
    let arrayRatings = Object.values(ratings);
    return arrayRatings;
}
;
function list(Array) {
    let ratingsSum = 0;
    let ratingsResult = 0;
    for (let i = 0; i < Array.length; i++) {
        if (arrRatings(Array[i].ratings).length > 0) {
            for (let j = 0; j < arrRatings(Array[i].ratings).length; j++) {
                ratingsSum += arrRatings(Array[i].ratings)[j];
            }
            ;
            ratingsResult = ratingsSum / arrRatings(Array[i].ratings).length;
            console.log(`Название фильма: ${Array[i].filmName}${' '.repeat(30 - Array[i].filmName.length)} | средний рейтинг: ${ratingsResult}`);
        }
        else {
            console.log(`Название фильма: ${Array[i].filmName}${' '.repeat(30 - Array[i].filmName.length)} | средний рейтинг: не оценивался`);
        }
        ;
        ratingsSum = 0;
    }
    ;
}
;
function find(Array, filmName) {
    const indexArr = findIndexArr(filmName);
    console.log(indexArr);
    if (indexArr == -1) {
        alert('К сожалению такого фильма нет.');
    }
    else {
        let filmSum = 0;
        let filmResult = 0;
        let name = '';
        let selectedFilm = Array[indexArr];
        for (let key in selectedFilm.ratings) {
            name = key;
            console.log(name);
        }
        ;
        if (arrRatings(Array[indexArr].ratings).length > 0) {
            for (let j = 0; j < arrRatings(selectedFilm.ratings).length; j++) {
                filmSum += arrRatings(selectedFilm.ratings)[j];
                filmResult = filmSum / arrRatings(selectedFilm.ratings).length;
            }
            filmSum = 0;
            console.log(`|Названия фильма:${filmName}${' '.repeat(10)}| \n|Имя оценщика: ${name}${' '.repeat(24)}| \n|Рейтинг: ${selectedFilm.ratings[name]} ${' '.repeat(31)}| \n|Средний рейтинг:${filmResult}${' '.repeat(23)}|`);
        }
        else {
            console.log(`Название фильма: ${Array[indexArr].filmName}${' '.repeat(30 - Array[indexArr].filmName.length)} | средний рейтинг: не оценивался`);
        }
        ;
    }
    ;
}
;
while (true) {
    let menu = prompt(`Выберите команду:\nadd - добавить фильм,\ndelete - удалить фильм,\nlist - вывести список фильмов,\nrate - добавить оценку к фильму по названию,\nfind - найти фильм по названию и показать его название и все оценки пользователей в виде таблицы.`);
    if (menu === null) {
        break;
    }
    if (menu === 'add') {
        let userAnswer = prompt('Введите название фильма:');
        if (userAnswer === null)
            break;
        add(userAnswer);
    }
    else if (menu === 'delete') {
        let userAnswer = prompt('Введите название фильма:');
        if (userAnswer === null)
            break;
        del(userAnswer);
    }
    else if (menu === 'list') {
        list(movies);
    }
    else if (menu === 'rate') {
        let userAnswer = prompt('Введите название фильма:');
        if (userAnswer === null)
            break;
        rate(userAnswer, movies);
    }
    else if (menu === 'find') {
        let userAnswer = prompt('Введите название фильма:');
        if (userAnswer === null)
            break;
        find(movies, userAnswer);
    }
    ;
}
;
//# sourceMappingURL=index.js.map