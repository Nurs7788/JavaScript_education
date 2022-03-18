($ => { 
    $.fn.myConfirm = function(message, ok, cancel) {
        let myConfirm = $(`
        <div class="myConfirm">
            <h1>${message}</h1>
            <button class="btn_ok">${ok}</button>
            <button class="btn_cancel">${cancel}</button>
        </div>`);

        $('body').append(myConfirm);

        const agree = () => {
            console.log(`User pressed ${ok}`);
            $('.myConfirm').css({display: 'none'});
        };

        const disagree = () => {
            console.log(`User pressed ${cancel}`);
            $('.myConfirm').css({display: 'none'});
        }

        $('.btn_ok').on('click', () => {
            agree();
        });

        $('.btn_cancel').on('click', () => {
            disagree();
        })
    };
})(jQuery);