const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return 4 when inputs are 1.4 and 2.6', function() {
        assert.strictEqual(calculateNumber(1.4, 2.6), 4);
    });
    
    it('should return 0 when inputs are -0.4 and 0.4', function() {
        assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
    });

    it('should return 6 when inputs are 2.5 and 2.5', function() {
        assert.strictEqual(calculateNumber(2.5, 2.5), 6);
    });

    it('should return -2 when inputs are -1.4 and -1.4', function() {
        assert.strictEqual(calculateNumber(-1.4, -1.4), -2);
    });

    it('should return 0 when inputs are 0 and 0', function() {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', function() {
        assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
    });
});
