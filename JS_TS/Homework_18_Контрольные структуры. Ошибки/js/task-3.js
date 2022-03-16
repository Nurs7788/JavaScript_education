const userFovoriteDrink = prompt('Какой ваш любимый напиток');

        switch (userFovoriteDrink) {
            case 'vodka' || 'beer':
                alert('Вы убиваете себя, спиртное вредит здоровью.');
                break
            case 'coffee':
                alert('Не злоупотребляйте кофе. Помните кофеин полезен только в малых количествах.');
                break
            case 'water': 
                alert('Вода источник жизни, пейте ее побольше!');
                break
            case 'juice' || 'fresh': 
                alert('Соки и фреши содержат много витаминов, пейте побольше!');
                break
            case 'blood' || 'virgin blood': 
                alert('ТЫ ВАМПИР!');
                break
            case 'black tea' || 'earl gray': 
                alert('Ты англичанин!');
                break    
            default: 
                alert('Я не знаю такой напиток');
        }