const drinks = ['milk', 'beer', 'beer', 'milk', 'milk'];

for(i = 0; i < drinks.length; i++) {
    let drink = drinks[i];
    switch(drink) {
        case 'milk':
            console.log('good');
            break;
        case 'beer':
            console.log('bad');
            break;
        default:
            break;
    };
};