let user = prompt('Введите логин');

while (user == 'admin') {
    let password = prompt('Введите пароль')
    if(password == 'BlackOverlord') {
        alert('Welcome');
    } else if (password == null) {
        alert('Login canceled');
    } else {
        alert('Wrong Password');
    };
};

if(user == '' || user == null) {
    alert('login canceled');
} else {
    alert('Unknown user');
};

