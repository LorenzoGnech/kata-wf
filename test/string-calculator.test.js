const {add} = require('../src/string-calculator')

describe('string-calculator', () => {
    
    describe('Step 1: basic operations', () => {

        it('Empty string as input should return 0', () => {
            const result = add('');
            expect(result).toBe(0);
        });

        it('Single value as input should return the same value', () => {
            const inputValue = '23';
            const result = add(inputValue);
            expect(result).toBe(23);
        });

        it('Two values as input should return the sum of the two', () => {
            const inputValue = '2,40';
            const result = add(inputValue);
            expect(result).toBe(42);
        });

    });

    describe('Step 2: handle unknown amount of numbers', () => {

        it('3 values as input should return the sum of them', () => {
            const inputValue = '2,40,32';
            const result = add(inputValue);
            expect(result).toBe(74);
        });

        it('A random amount of values as input should return the sum of them', () => {
            const max_value = 100
            const getRandomInt = (max_value) => Math.round(Math.random() * max_value);
            const randomArray = (length, max_value) => [...new Array(length)].map(() => getRandomInt(max_value));
            const randomInput = randomArray(getRandomInt(max_value), max_value);
            const sum = randomInput.reduce((t, n) => t+n);
            const inputValues = randomInput.join();
            const result = add(inputValues);
            expect(result).toBe(sum);
        });

    });

    describe('Step 3: handle new lines between numbers', () => {

        it('A new line in the input in place of commas should not be a problem', () => {
            const inputValue = '2\n40,32';
            const result = add(inputValue);
            expect(result).toBe(74);
        });

        it('Multiple new lines in the input in place of commas should not be a problem', () => {
            const inputValue = '2\n5,26\n5\n4';
            const result = add(inputValue);
            expect(result).toBe(42);
        });
    
    });

    describe('Step 4: support different delimiters', () => {

        it('A delimiter defined with the correct syntax at the start of the input should be supported', () => {
            const inputValue = '//;\n10;30;2';
            const result = add(inputValue);
            expect(result).toBe(42);
        });

        it('A delimiter comprised of multiple characters should be supported', () => {
            const inputValue = '//;!?\n10;!?30;!?2';
            const result = add(inputValue);
            expect(result).toBe(42);
        });
    
        it('Using a special character like / as delimiter should be supported', () => {
            const inputValue = '///\n10/30/2';
            const result = add(inputValue);
            expect(result).toBe(42);
        });

    });

    describe('Step 5: throw error when dealing with negative numbers', () => {

        it('If a negative value is passed, an error should be thrown', () => {
            const inputValue = '10,30,-2';
            expect(() => {add(inputValue)}).toThrowError(new Error("negatives not allowed: -2"));
        });

        it('If a negative value is passed with a custom delimiter, an error should be thrown', () => {
            const inputValue = '//;\n10;3;-2';
            expect(() => {add(inputValue)}).toThrowError(new Error("negatives not allowed: -2"));
        });

        it('If multiple negative values are passed, an error printing all of them should be thrown', () => {
            const inputValue = '-10,-7,2,5';
            expect(() => {add(inputValue)}).toThrowError(new Error("negatives not allowed: -10,-7"));
        });

    });

    describe('Step 6: ignore big numbers', () => {

        it('If a big number is passed, its value should not be counter in the sum', () => {
            const inputValue = '10,30,1005,2';
            const result = add(inputValue);
            expect(result).toBe(42);
        });

        it('If multiple big numbers are passed, their values should not be counter in the sum', () => {
            const inputValue = '10,3000,1050,2,30';
            const result = add(inputValue);
            expect(result).toBe(42);
        });

        it('If only big numbers are passed, the result should be 0', () => {
            const inputValue = '100000,3000,1005,20003232';
            const result = add(inputValue);
            expect(result).toBe(0);
        });

        it('If a negative big numbers is passed, the function should throw an error', () => {
            const inputValue = '10,30,-1050,2';
            expect(() => {add(inputValue)}).toThrowError(new Error("negatives not allowed: -1050"));
        });

    });

});