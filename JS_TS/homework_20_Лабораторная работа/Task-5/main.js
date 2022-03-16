const group1 = [];
const group2 = [];
const group3 = [];
const group4 = [];
const group5 = [];
const group6 = [];
const group7 = [];
const group8 = [];
const group9 = [];
const group10 = [];


const numberOfSamples = 100000;

for(let i = 0; i < numberOfSamples; i++) {
    const randomNumber = Math.floor(Math.random() * 100);

    if(randomNumber >= 0 && randomNumber <= 9) {
        group1.push(randomNumber);
    } else if(randomNumber > 9 && randomNumber <= 19) {
        group2.push(randomNumber);
    } else if(randomNumber > 19 && randomNumber <= 29) {
        group3.push(randomNumber);
    } else if(randomNumber > 29 && randomNumber <= 39) {
        group4.push(randomNumber);
    } else if(randomNumber > 39 && randomNumber <= 49) {
        group5.push(randomNumber);
    } else if(randomNumber > 49 && randomNumber <= 59) {
        group6.push(randomNumber);
    } else if(randomNumber > 59 && randomNumber <= 69) {
        group7.push(randomNumber);
    } else if(randomNumber > 69 && randomNumber <= 79) {
        group8.push(randomNumber);
    } else if(randomNumber > 79 && randomNumber <= 89) {
        group9.push(randomNumber);
    } else if(randomNumber > 89 && randomNumber <= 99) {
        group10.push(randomNumber);
    }
}

const message = `Number of samples: ${numberOfSamples}
Group 0 - 9: ${group1.length}
Group 10 - 19: ${group2.length}
Group 20 - 29: ${group3.length}
Group 30 - 39: ${group4.length}
Group 40 - 49: ${group5.length}
Group 50 - 59: ${group6.length}
Group 60 - 69: ${group7.length}
Group 70 - 79: ${group8.length}
Group 80 - 89: ${group9.length}
Group 90 - 99: ${group10.length}
`
console.log(message);