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

        describe('probFour', function () {
            xit('finds the largest palindrome made from the product of two 3-digit numbers', function () {
                expect(euler.probFour(999, 100)).toEqual(906609);
            });
        });

        describe('probSix', function () {
            it('returns the difference between the sum of squares and the square of sums for all numbers between a floor and a ceiling', function () {
                expect(euler.probSix(1, 100)).toEqual(25164150);
            });
        });

        describe('probSeven', function () {
            it('when passed a number n, it returns the nth prime number', function () {
                expect(euler.probSeven(6)).toEqual(13);
                expect(euler.probSeven(7)).toEqual(17);
                expect(euler.probSeven(8)).toEqual(19);
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
                expect(function () { eulerDebug.arrayProd([3, false, 5]) }).toThrow('Non-numerical array value passed to arrayProd');
            });
        });

        describe('matchArrayItems', function () {
            
            it('returns an array of all items which appear in each of two arrays', function () {
                var a = [3, 5, 7, 10],
                    b = [5, 6, 12, 2];

                expect(eulerDebug.matchArrayItems(a, b)).toEqual([5]);
            });
        });

        describe('isStringPalindrome', function () {
            
            it('returns true if the string it is passed reads the same forwards and backwards', function () {
                expect(eulerDebug.isStringPalindrome('madam')).toEqual(true);
            });

            it('returns true if the string it is passed reads the same forwards and backwards, inedependent of case', function () {
                expect(eulerDebug.isStringPalindrome('Madam')).toEqual(true);
                expect(eulerDebug.isStringPalindrome('maDam')).toEqual(true);
            });

            it('returns false if the string it is passed does not read the same forwards and backwards', function () {
                expect(eulerDebug.isStringPalindrome('Mike')).toEqual(false);
                expect(eulerDebug.isStringPalindrome('mIke')).toEqual(false);
            });

            it('returns false if the string it is passed does not read the same forwards and backwards', function () {
                expect(eulerDebug.isStringPalindrome('123')).toEqual(false);
            });
        });

        describe('sumOfSquares', function () {
            it('returns the sum of the squares between a provided floor and ceiling', function () {
                expect(eulerDebug.sumOfSquares(1, 10)).toEqual(385);
            });
        });

        describe('squareOfSum', function () {
            it('returns the square of the sum of all numbers between a provided floor and ceiling', function () {
                expect(eulerDebug.squareOfSum(1, 10)).toEqual(3025);
            });
        });

        describe('isPrime', function () {
            it('returns true if the number it is passed is a prime number', function () {
                expect(eulerDebug.isPrime(3)).toEqual(true);
                expect(eulerDebug.isPrime(7)).toEqual(true);
                expect(eulerDebug.isPrime(11)).toEqual(true);
            });

            it('returns false if the number it is passed is not a prime number', function () {
                expect(eulerDebug.isPrime(6)).toEqual(false);
                expect(eulerDebug.isPrime(25)).toEqual(false);
                expect(eulerDebug.isPrime(12)).toEqual(false);
            });
        });
    });
});
