$(() => {
    function createAlert(titleContent, bodyContent, bodyContentOne, bodyContentTwo, btnContent, bodyBoldContent, callback) {
        let conatiner = $('<div class="container"></div>');

        let newTitle = $(`<h1>${titleContent}</h1>`);
        let newBody = $(`<div class="content">
                            <div>${bodyContent}</div>
                            <div>${bodyContentOne} <b>${bodyBoldContent}</b> <i>${bodyContentTwo}</i></div>
                        </div>`);
        let newBtn = $(`<div class="btnBlock"><button class="btn">${btnContent}</button></div>`);

        let myAlert = conatiner.append(newTitle, newBody, newBtn);

        let divBg = $('<div class="bg"></div>');

        divBg.append(myAlert);

        callback(divBg);

        return divBg;
    };

    setTimeout(() => {
        createAlert('ALert', 'This is a simple alert.', 'with some', 'contents', 'okay', 'HTML', divBg => {
            $('body').append(divBg);
        });
        
        $('.bg').on('click', () => {
            $('.bg').css({display: 'none'});
        });

        let formBtn = $('.btn');

        formBtn.on('click', () => {
            $('.bg').css({display: 'none'});
        })

        $('.container').on('click', function(e) {
            e.stopPropagation();
        })
    }, 1000);    
});
