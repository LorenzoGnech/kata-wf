const add = (inputString) => {
    if(inputString == ''){
        return 0;
    }
    let delimiter = ","
    if(inputString.startsWith("//")){
        delimiter = getDelimiter(inputString)
        let delimiterEnd = inputString.indexOf('\n') + 1
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
    let cleanString = string.substring(2, string.length)
    let end = cleanString.indexOf('\n')
    return cleanString.substring(0, end);
}

const findLastPar = (pattern, string) => { // Returns the last index where the pattern is present in the string
    const indexes = [...string.matchAll(new RegExp(pattern, 'gi'))].map(a => a.index);
    return indexes.slice(-1)[0]
}


module.exports = {
    add
};
