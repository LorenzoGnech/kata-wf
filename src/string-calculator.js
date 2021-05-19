const add = (inputString) => {

    if(inputString == ''){
        return 0;
    }

    let delimiter = ",";
    if(inputString.startsWith("//")){ // Handle custom delimiters
        delimiter = getDelimiter(inputString);
        let delimiterEnd = inputString.indexOf('\n') + 1;
        inputString = inputString.substring(delimiterEnd, inputString.length);
    }
    inputString = inputString.replace(/\n/g,delimiter);
    let values = inputString.split(delimiter).map(num => parseInt(num));

    if(checkForNegatives(values)){ // Handle negative values
        let negatives = getNegatives(values);
        throw new Error("negatives not allowed: " + negatives);
    }

    values = values.filter(a => a <= 1000) // Handle big numbers
    if(values.length == 0) return 0;

    let result = values.reduce(sumValues);
    return result;
}

const sumValues = (tot, num) => { // Helper function for summing the values in the array
    return tot + num;
}

const getDelimiter = (string) => { // Returns the delimiter specified at the start of the input string
    let cleanString = string.substring(2, string.length);
    let end = cleanString.indexOf('\n');
    return cleanString.substring(0, end);
}

const checkForNegatives = (array) => { // Returns true if the array contains any negative value
    return array.some(num => num < 0);
}

const getNegatives = (array) => { // Returns a string containing all the negative values in the array divided by a comma
    let negatives = array.filter(a => a < 0)
    return negatives.join();
}

module.exports = {
    add
};