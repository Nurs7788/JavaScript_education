let a = Math.floor(Math.random() * 9 + 1);

let b = Math.floor(Math.random() * 9 + 1);

let c = prompt(`What is ${a} * ${b}?`);


if(c == a * b) {
    alert('You are correct!');
} else if(c == null || c == '') {
    alert('You have not answered question');
} else {
    alert('You are wrong.');
};

