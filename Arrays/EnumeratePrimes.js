/**
 * @param {number} n
 * @return {Array<number>}
 */

// below function cannot meet the time complexity requirement
const enumeratePrimes = (n) => {
    if (n <= 1) return [];

    const output = [];
    let i = 2;
    while (i < n) {
        let j = 2;
        let isPrime = true;

        while (j < i) {
            if (i % j === 0) isPrime = false;
            j++
        }

        if (isPrime) output.push(i);
        i++
    }
    return output;
};

// Better way:
let enumeratePrimesFun = (n) => {
    if(n <=1) return null;

    let output = [];
    // const isPrime is an boolean array with length n:
    const isPrime = Array(n).fill(false);
    // assume all isPrime[i] = true;
    for(let i = 0; i < n; i ++) isPrime[i] = true;
    // 0 & 1 cannot be prime number
    isPrime[0] = false;
    isPrime[1] = false;

    // check if i is a prime number or not, logic is: if i is a prime number, then its multiple number cannot be the prime number:
    for(let i = 0; i < n; i ++){
        if(isPrime[i]){
            // since we want to find all multiple of i and make them to isPrime[j] = false, the minimal j = i + i,
            // and since isPrime[i] when i = 1 already is false, so isPrime[1] wont into this condition
            // meaning the minimal j has to be started when i = 2, so j = 4
            for(let j = i + i; i <n; j += i ){
                isPrime[j] = false
            }
            // when isPrime[i] is true, add it to output []
            output.push(i)
        }
    }
    return output;
    // In LeetCode question 204, need to find the count number of this output, so is "return output.length"
};
