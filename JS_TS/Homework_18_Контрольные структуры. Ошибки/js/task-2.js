let userAnswerAge = prompt('Введите ваш возрост:');
let userAge = parseInt(userAnswerAge);

if (userAge <= 5) {
    alert('Ты еще слишком маленький для фильмов, смотри мультики для детей');
} else if (userAge > 5 && userAge <= 13) {
    alert('Ты можешь смотреть фильмы в жанре комедии');
} else if (userAge > 13 && userAge <= 17) {
    alert('Я советую посмотреть фильм в жанре приключения');
} else if (userAge >= 18 && userAge <= 20) {
    alert('Ты можешь смотреть фильмы в жанре боевика, драмы, военные мелодрамы');
} else if (userAge >= 21 && userAge <= 100) {
    alert('Вы можете смотреть фильмы с рейтингом "R"');
} else {
    alert('Вы не правильно ввели возраст!');
}