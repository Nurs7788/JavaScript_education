const elements = document.getElementsByClassName('element');

for(let i = 0; i < elements.length; i++) {
    for(let j = 0; j < elements.length; j++) {
        elements[j].style.color = 'red';
    };

    for(let k = 3; k < elements.length; k++) {
        elements[k].style.color = 'green';
    };
};