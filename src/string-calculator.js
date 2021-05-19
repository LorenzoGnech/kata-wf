const calculator = (inputString) => {
    if(inputString == ''){
        return 0;
    }
    let delimiter = ","
    if(inputString.startsWith("//")){
        delimiter = getDelimiter(inputString)
        let delimiterEnd = findLastPar('\n', inputString) + 1
        inputString = inputString.substring(delimiterEnd, inputString.length);
    }
    inputString = inputString.replace(/\n/g,delimiter)
    let values = inputString.split(delimiter).map(num => parseInt(num));
    let result = values.reduce(sumValues);
    return result;
}

const sumValues = (tot, num) => {
    return tot + num;
}

const getDelimiter = (string) => {
    string = string.substring(0, string.indexOf('\n'))
    let start = string.indexOf('[')
    let end = findLastPar(']',string)
    return string.substring(start+1, end);
}

const findLastPar = (pattern, string) => { // Returns the last index where the pattern is present in the string
    const indexes = [...string.matchAll(new RegExp(pattern, 'gi'))].map(a => a.index);
    return indexes.slice(-1)[0]
}


module.exports = {
    calculator
};