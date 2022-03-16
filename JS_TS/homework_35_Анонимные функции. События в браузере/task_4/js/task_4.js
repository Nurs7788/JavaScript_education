$(() => {
    const form = $('form');
    const logIn = $('input[value="Log in"]');
    const userName = $('input[name="username"]');
    const userPassword = $('input[name="password"]');
    const inputBtn = $('input');
    
    form.css({
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    });

    inputBtn.css({
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box"
    });

    let userLogin = '';
    let passwordUser = '';

    userName.on('keyup', function() {
        let login = $(this).val();
        userLogin = login;
        if(userLogin.length >= 6 && passwordUser.length >= 6) {
            logIn.prop('disabled', false);
        } else {
            logIn.prop('disabled', true);
        };
    });

    userPassword.on('keyup', function() {
        let password = $(this).val();
        passwordUser = password;
        if(userLogin.length >= 6 && passwordUser.length >= 6) {
            logIn.prop('disabled', false);
        } else {
            logIn.prop('disabled', true);
        };
    });

    logIn.on('mouseup', function() {
        alert(`Логин: ${userLogin} \nПароль: ${passwordUser}`);
    });

    form.on('submit', function (event) {   
        event.preventDefault();
    });
});