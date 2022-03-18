$(() => {
    $('.btn').on('click', () => {
        let div = $('<div></div>');
        div.myConfirm('I am new Cofirm.<br>Do you agree?', 'Yes', 'No')
    });
});