const add = (inputString) => {
    if(inputString == ''){
        return 0;
    }
    let delimiter = ",";
    if(inputString.startsWith("//")){
        delimiter = getDelimiter(inputString);
        let delimiterEnd = inputString.indexOf('\n') + 1;
        inputString = inputString.substring(delimiterEnd, inputString.length);
    }
    inputString = inputString.replace(/\n/g,delimiter);
    let values = inputString.split(delimiter).map(num => parseInt(num));
    if(checkForNegatives(values)){
        let negatives = getNegatives(values);
        throw new Error("negatives not allowed: " + negatives);
    }
    let result = values.reduce(sumValues);
    return result;
}

const sumValues = (tot, num) => {
    return tot + num;
}

const getDelimiter = (string) => {
    let cleanString = string.substring(2, string.length);
    let end = cleanString.indexOf('\n');
    return cleanString.substring(0, end);
}

const checkForNegatives = (array) => {
    return array.some(num => num < 0);
}

const getNegatives = (array) => {
    let negatives = array.filter(a => a < 0)
    return negatives.join();
}

module.exports = {
    add
};