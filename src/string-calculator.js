const calculator = (inputString) => {
    if(inputString == ''){
        return 0;
    }
    inputString = inputString.replace(/\n/g,',')
    let values = inputString.split(',').map(num => parseInt(num));
    let result = values.reduce(sumValues);
    return result;
}

const sumValues = (tot, num) => {
    return tot + num;
}


module.exports = {
    calculator
};