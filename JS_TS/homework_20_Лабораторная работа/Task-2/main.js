let userSentens = prompt('Введите строку:');

userSentens = `* ${userSentens} *`

let sentensFrame = '';

for(let i = 0; i < userSentens.length; i++) {
    sentensFrame += '*';
}

alert(`${sentensFrame} \n${userSentens} \n${sentensFrame}`);

