const southData = [13, 15, 19, 26, 21, 22, 23];
const westData = [15, 14, 16, 18, 17, 24, 25];
const eastData = [20, 17, 19, 15, 24, 25, 26];
const northData = [19, 18, 23, 20, 23, 19, 31];

const tempSum = function(x) {
    const sum = x.reduce((prev, item, index) => {
        return prev + item;
    }, 0);

    let sumTotal = sum / x.length;

    sumTotal = Math.floor(sumTotal);

    return alert(`Средняя температура в данной области состовляет ${sumTotal}`);
};

tempSum(southData);