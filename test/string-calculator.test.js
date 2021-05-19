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
});