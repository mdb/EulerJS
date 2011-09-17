if (typeof Euler === 'undefined' || !Euler) {
    var Euler = {};
}

(function ($) {
    Euler = function (options) {
        var settings = {
                debug: false
            },

            privMethods = {

                // get the next Fibonnaci number
                getFib: function (nMinu1, nMinus2) {
                    return (nMinu1 + nMinus2);
                },

                // returns an object housing all the comps and all the primes below a ceiling
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

                // returns the product of all the numbers in an array
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

                },

                // identifies duplicate array items that occur in each of the two arrays it's passed
                matchArrayItems: function (arrayOne, arrayTwo) {
                    var arrayOneLength = arrayOne.length,
                        arrayTwoLength = arrayTwo.length,
                        a,
                        b,
                        matchedItems = [];

                    for (a=0; a<arrayOneLength; a++) {
                        for (b=0; b<arrayTwoLength; b++) {

                            if (arrayOne[a] === arrayTwo[b]) {
                                matchedItems.push(arrayTwo[b]);
                                arrayTwo.pop(arrayTwo[b]); // side effect
                            }
                        }
                    }

                    return matchedItems;
                    
                },

                // checks if a string is palindromic
                isStringPalindrome: function (string) {
                    var strLength = string.length,
                        i;

                    for (i=0; i<strLength; i++) {
                        if (string.toLowerCase().charAt(i) !== string.toLowerCase().charAt(strLength - 1 - i)) {
                            return false;
                        }
                    }

                    return true;
                },

                // returns the sum of all the squares between a floor and a ceiling
                sumOfSquares: function (floor, ceiling) {
                    var i,
                        sum = 0;

                    for (i=floor; i<=ceiling; i++) {
                        sum = sum + (i * i);
                    }

                    return sum;
                },

                // returns the square of the sum of all the natural numbers between a floor and a ceiling
                squareOfSum: function (floor, ceiling) {
                    var i,
                        sum = 0;

                    for (i=floor; i<=ceiling; i++) {
                        sum = sum + i;
                    }

                    return (sum * sum);
                },

                // is the number passed prime?
                isPrime: function (num) {
                    var i,
                        j;

                    for (i = num; i > 1; i--) {
                        for (j = i - 1; j > 1; j--) {
                            if (i % j === 0) {
                                return false;
                            }
                        }

                        return true;
                    }
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

            /* Problem 3:
             *
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

            /* Problem 4:
             *
             * Find the largest palindrome made from the product of two 3-digit numbers.
             * TODO: Make this puppy not crash browsers.
             *
             */
            probFour: function (ceiling, floor) {
                var i,
                    j,
                    prod,
                    largestPal = 0;
                
                // WARNING: this monster is a browser crasher
                for (i=ceiling; i>=floor; i--) {
                    for (j=i; j>=floor; j--) {
                        prod = i * j;

                        if (prod > largestPal && privMethods.isStringPalindrome(prod.toString())) {
                            largestPal = prod;
                        }
                    }
                }

                return largestPal;
            },

            /* Problem 5: TODO
             *
             * What is the smallest number divisible by each of the numbers 1 to 20?
             *
             */ 
            probFive: function (ceiling) {
                var ceilingArray = [], // 2 - 20
                    primes = privMethods.getPrimesAndComps(ceiling).primes,
                    finalList = primes,
                    i,
                    j,
                    iCount,
                    k;

                for (i=2; i<=ceiling; i++) {
                    ceilingArray.push(i);
                }

                for (i=0; i<primes.length; i++) {
                    iCount = 0;

                    for (j=2; j<=ceiling; j++) {

                        if (Math.pow(primes[i], j) <= ceiling) {
                            iCount = iCount + 1;
                        } else {
                            break;
                        }
                    }
                    
                    for (k=1; k<=iCount; k++) {
                        finalList.push(primes[i]);
                    }
                }

                return privMethods.arrayProd(finalList);
            },

            /* Problem 6:
             *
             * Find the difference between the sum of the squares of the first one
             * hundred natural numbers and the square of the sum.
             *
             */
            probSix: function (floor, ceiling) {
                var sumOfSquares = privMethods.sumOfSquares(floor, ceiling);
                    squareOfSum = privMethods.squareOfSum(floor, ceiling);

                return (squareOfSum - sumOfSquares);
            },

            /* Problem 7:
             *
             * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
             * we can see that the 6th prime is 13
             *
             * What is the 10 001st prime number?
             *
             * TODO: Can this be further optimized?
             *
             * Performance stats:
             *
             *      real	71m26.794s
             *      user	25m4.277s
             *      sys	0m20.566s
             *
             */
            probSeven: function (nthPrime) {
                var primeCount = 0,
                    primesUnderTwenty = privMethods.getPrimesAndComps(20).primes,
                    i = 0,
                    j,
                    primeCandidate;

                // so long as primeCount is less than nthPrime 
                while (primeCount < nthPrime) {
                    i++;
                    primeCandidate = true;

                    // if it's not even and it's not divisible by any prime 2 - 20 
                    if (i % 2 !== 0) {
                        for (j=i; j<primesUnderTwenty.length; j++) {
                            if (i % primesUnderTwenty[j] === 0) {
                                primeCandidate = false;
                                break;
                            }
                        }
                    }

                    // if primeCandidate is true based on above criteria and isPrime is true, then count it
                    if (primeCandidate && privMethods.isPrime(i)) {
                        primeCount = primeCount + 1;
                    }

                }

                return i;
            },

            /* Problem 8:
             *
             * Find the greatest product of five consecutive digits in the 1000-digit number.
             *
             *  73167176531330624919225119674426574742355349194934
             *  96983520312774506326239578318016984801869478851843
             *  85861560789112949495459501737958331952853208805511
             *  12540698747158523863050715693290963295227443043557
             *  66896648950445244523161731856403098711121722383113
             *  62229893423380308135336276614282806444486645238749
             *  30358907296290491560440772390713810515859307960866
             *  70172427121883998797908792274921901699720888093776
             *  65727333001053367881220235421809751254540594752243
             *  52584907711670556013604839586446706324415722155397
             *  53697817977846174064955149290862569321978468622482
             *  83972241375657056057490261407972968652414535100474
             *  82166370484403199890008895243450658541227588666881
             *  16427171479924442928230863465674813919123162824586
             *  17866458359124566529476545682848912883142607690042
             *  24219022671055626321111109370544217506941658960408
             *  07198403850962455444362981230987879927244284909188
             *  84580156166097919133875499200524063689912560717606
             *  05886116467109405077541002256983155200055935729725
             *  71636269561882670428252483600823257530420752963450
             * 
             */ 
            probEight: function () {
                var bigNum = num || 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450;
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
