EnvJasmine.load(EnvJasmine.jsDir + 'euler.js');

describe('Euler', function () {
    var euler = new Euler(),
        eulerDebug = new Euler({ debug: true });

    describe('Euler public methods', function () {

        describe('probOne', function () {
            it('Find the sum of all the multiples of 3 or 5 below 1000', function () {
                expect(euler.probOne()).toEqual(233168);
            });
        });

        describe('probTwo', function () {
            it('finds the sum of the even-valued terms in the Fibonacci sequence whose values do not exceed the provided ceiling', function () {
                expect(euler.probTwo(10)).toEqual(10); // 2 + 8
                expect(euler.probTwo(4000000)).toEqual(4613732);
            });
        });

        describe('probThree', function () {
            it('Finds the largest prime factor of a composite number', function () {
                expect(euler.probThree(10)).toEqual(5);
                expect(euler.probThree(20)).toEqual(5);
            });
        });
    });

    describe('Euler private methods', function () {

        describe('arrayProd', function () {
            it('returns the product of all the numbers in an array', function () {
                expect(eulerDebug.arrayProd([2, 3, 5])).toEqual(30);
                expect(eulerDebug.arrayProd([0, 3, 5])).toEqual(0);
            });

            it('throws an error if a non-numerical value found within the array its passed', function () {
                expect(eulerDebug.arrayProd([3, false, 5])).toThrow('Non-numerical array value passed to arrayProd');
            });
        });
    });
});
