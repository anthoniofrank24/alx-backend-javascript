const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 for 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 0 for -0.4 and 0.4', () => {
            assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 for 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return -0 for -0.4 and 0.4', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -0.4, 0.4), -0);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 for 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return Error for 1.4 and 0.4', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for invalid type', () => {
            assert.throws(() => {
                calculateNumber('INVALID', 1.4, 4.5);
            }, /Invalid type/);
        });
    });
});