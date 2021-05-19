const calculator = (inputString) => {
    if(inputString == ''){
        return 0;
    }
    let values = inputString.split(',')
    if(values.length == 1){
        return parseInt(values[0])
    } else{
        return parseInt(values[0]) + parseInt(values[1])
    }
}

module.exports = {
    calculator
};
