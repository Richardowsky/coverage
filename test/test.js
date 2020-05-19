const {assert} = require('chai');
const {performance} = require('perf_hooks');
const {antennaCoverage} = require('../src/index');

describe('Test', function () {
    let start, end, result

    it('should return 281', function () {
        start = performance.now()
        result = antennaCoverage([3, 595, 43, 2, 300, 4, 554, 10])
        end = performance.now()
        console.log(end - start)
        assert.equal(result, 281);
    });

    it('should return 0', function () {
        start = performance.now()
        result = antennaCoverage([1, 1, 1, 1])
        end = performance.now()
        console.log(end - start)
        assert.equal(result, 0);
    });

    it('should return 26', function () {
        start = performance.now()
        result = antennaCoverage([5, 240, 13, 0, 50, 25, 60, 5, 155, 70, 165, 70])
        end = performance.now()
        console.log(end - start)
        assert.equal(result, 26);
    });

});


