$(() => {
    let cards = $('.cards');
    let disCardBtn = $('.btn_dis');
    let FigText = $('#fig_text');
    let intro = $('.intro');
    let hero = $('.hero');
    let promo = $('.promo');
    let btnAl = $('.btnAl');

    btnAl.on('click', () => {
        Swal.fire({
            title: 'Sweet!',
            text: 'Я лучше чем ALERT!',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    });

    FigText.on('click', () => {
        intro.css({display: 'none'});
        hero.hide('clip', 1000);
    });

    promo.on('click', () => {
        intro.show('fold', 1000);
    })

    disCardBtn.on('click', function() {
        cards.toggle(1000);
    });
});