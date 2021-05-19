const {calculator} = require('../src/string-calculator')

describe('string-calculator', () => {
    
    describe('Step 1: basic operations', () => {

        it('Empty string as input should return 0', () => {
            const result = calculator('');
            expect(result).toBe(0);
        });

        it('Single value as input should return the same value', () => {
            const inputValue = '23';
            const result = calculator(inputValue);
            expect(result).toBe(23);
        });

        it('Two values as input should return the sum of the two', () => {
            const inputValue = '2,40';
            const result = calculator(inputValue);
            expect(result).toBe(42);
        });

    });

    describe('Step 2: handle unknown amount of numbers', () => {

        it('3 values as input should return the sum of them', () => {
            const inputValue = '2,40,32';
            const result = calculator(inputValue);
            expect(result).toBe(74);
        });

        it('A random amount of values as input should return the sum of them', () => {
            const max_value = 100
            const getRandomInt = (max_value) => Math.round(Math.random() * max_value);
            const randomArray = (length, max_value) => [...new Array(length)].map(() => getRandomInt(max_value));
            const randomInput = randomArray(getRandomInt(max_value), max_value);
            const sum = randomInput.reduce((t, n) => t+n);
            const inputValues = randomInput.join();
            const result = calculator(inputValues);
            expect(result).toBe(sum);
        });

    });

    describe('Step 3: handle new lines between numbers', () => {

        it('A new line in the input in place of commas should not be a problem', () => {
            const inputValue = '2\n40,32';
            const result = calculator(inputValue);
            expect(result).toBe(74);
        });

        it('Multiple new lines in the input in place of commas should not be a problem', () => {
            const inputValue = '2\n5,26\n5\n4';
            const result = calculator(inputValue);
            expect(result).toBe(42);
        });
    
    });

    describe('Step 4: support different delimiters', () => {

        it('A delimiter defined with the correct syntax at the start of the input should be supported', () => {
            const inputValue = '//[;]\n10;30;2';
            const result = calculator(inputValue);
            expect(result).toBe(42);
        });

        it('A delimiter comprised of multiple characters should be supported', () => {
            const inputValue = '//[;!?]\n10;!?30;!?2';
            const result = calculator(inputValue);
            expect(result).toBe(42);
        });
    
        it('Using a special character like [ as delimiter should be supported', () => {
            const inputValue = '//[[]\n10[30[2';
            const result = calculator(inputValue);
            expect(result).toBe(42);
        });

        it('Using a special character like ] as delimiter should be supported', () => {
            const inputValue = '//[]]\n10]30]2';
            const result = calculator(inputValue);
            expect(result).toBe(42);
        });

        it('Using both special characters [ and ] as delimiters should be supported', () => {
            const inputValue = '//[[]]\n10[]30[]2';
            const result = calculator(inputValue);
            expect(result).toBe(42);
        });

    });

});