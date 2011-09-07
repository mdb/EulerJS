if (typeof Euler === 'undefined' || !Euler) {
    var Euler = {};
}

(function ($) {
    Euler = function (options) {
        var settings = {
                debug: false
            },

            privMethods = {

                getFib: function (nMinu1, nMinus2) {
                    return (nMinu1 + nMinus2);
                },

                getPrimesAndComps: function(ceiling) {
                    var primes = [],
                        comps = [],
                        j,
                        k,
                        factorLim,
                        possPrime;

                    for (j = 2; j <= ceiling; j++) {
                        possPrime = true;

                        for (var k = 2, factorLim = Math.sqrt(j);  k <= factorLim;  k++) {
                            if (j % k === 0) {
                                possPrime = false;
                                comps.push(j);
                            }
                        }

                        if (possPrime)  {
                            primes.push(j);
                        }
                    }

                    return {
                        primes: primes,
                        comps: comps
                    };
                },

                arrayProd: function (array) {
                    var prod = 1;
                        i;

                    for (i=0; i<array.length; i++) {
                        if (typeof array[i] === 'number') {
                            prod = prod * array[i];
                        } else {
                            throw 'Non-numerical array value passed to arrayProd';
                        }
                    }

                    return prod;

                }
            },

            pubMethods = {

            /* Problem 1:
             *
             * If we list all the natural numbers below 10 that are 
             * multiples of 3 or 5, we get 3, 5, 6 and 9. 
             *
             * The sum of these multiples is 23.
             * 
             * Find the sum of all the multiples of 3 or 5 below 1000.
             *
             */
            probOne: function () {
                var counter = 0;

                for (i=0; i<1000; i++) {
                    if (i % 3 === 0 || i % 5 === 0) {
                       counter = counter + i; 
                    }
                }

                return counter;
            },

            /* Problem 2:
             *
             * Each new term in the Fibonacci sequence is generated
             * by adding the previous two terms. 
             *
             * By starting with 1 and 2, the first 10 terms will be:
             *
             * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
             *
             * By considering the terms in the Fibonacci sequence 
             * whose values do not exceed four million, find the sum 
             * of the even-valued terms.
             *
             */ 
            probTwo: function (ceiling) {
                var fib = 0,
                    fibSum = 0,
                    nMinus1 = 1,
                    nMinus2 = 0,
                    ceiling = ceiling || 4000000;

                while (fib < ceiling) {
                    fib = function(nMinus1, nMinus2) {
                        return (nMinus1 + nMinus2);
                    }
                    fib = privMethods.getFib(nMinus1, nMinus2);
                    nMinus2 = nMinus1;
                    nMinus1 = fib;

                    if (fib % 2 === 0) {
                        fibSum += fib;
                    }
                }

                return fibSum;
            },

            /*
             * Find the largest prime factor of a composite number.
             *
             * NOTE:
             *  prime number - bigger than one and has no divisors other than 1 and itself
             *  composite number - any positive integer greater than one that is not a prime number
             *
             */ 
            probThree: function (composite) {
                var primes = [],
                    primeFactors = [],
                    prime;

                primes = privMethods.getPrimesAndComps(composite).primes;

                for (prime in primes) {
                    if (composite % primes[prime] === 0) {
                        primeFactors.push(primes[prime]);
                    }
                }

                // Fast JS Min/Max via Resig: http://ejohn.org/blog/fast-javascript-maxmin/
                return Math.max.apply(Math, primeFactors);
            },

            /*
             * What is the smallest number divisible by each of the numbers 1 to 20?
             */ 
            probFive: function (ceiling) {
                var primes = getPrimesAndComps(ceiling).primes,
                    comps = getPrimesAndComps(ceiling).comps,
                    primesProd = privMethods.arrayProd(primes);
            }
        };

        if (options) {
            $.extend(settings, options);
        }

        if (settings.debug) {
            return $.extend({}, privMethods, pubMethods);
        } else {
            return pubMethods;
        }

    };
}(jQuery));
