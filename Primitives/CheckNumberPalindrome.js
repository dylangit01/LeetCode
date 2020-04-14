/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    // if x less than 0, Palindrome is false
    if (x < 0) return false;

    // check how many digits of this x?
    // First using log10 to get exact 10 to what number to get x
    // Then chop off the decimal number and add 1 to get total digits of x:
    const logarithmAnswer = Math.log10(x);
    let totalDigits = Math.floor(logarithmAnswer) + 1;

    // Next,finding the mast by using:
    let mask = Math.pow(10, totalDigits - 1); //in this case, which is 1000
    // Then iterate half of this number to compare, but before the mid number:
    for (let i = 0; i < totalDigits / 2; i++) {
        // in this loop, get start digit from left
        const mostLeftDigit = Math.floor(x / mask);
        // then get the end digit from right, using % to get this num
        const mostRightDigit = x % 10;
        // compare them:
        if (mostLeftDigit !== mostRightDigit) return false;
        // Next, we need to compare rest of the number x, since we already check first left and right;
        x %= mask;  // this way we chop off the first checked number from the left
        // Since x already come the rest number, we divided by 10, and floor it to get...
        x = Math.floor(x / 10);
        // finally, since we already cut first left number and right first number,
        // meaning we loose two "zero" for this number x, so the mask has to be reduce two zero as well:
        mask /= 100;
    }
    // if all above conditions met, we return true, otherwise in for loop, we already return false
    return true;
};

// Practice:
checkNumPalindrome = (num) => {
    if (num < 0) return false;

    const logarithmNum = Math.log10(num);
    const totalDigits = Math.floor(logarithmNum) + 1;

    let maskNum = Math.pow(10, totalDigits - 1);
    for (let i = 0; i < num.length; i++) {
        let mostLeftDigt = Math.floor(num / maskNum);
        let mostRightDigt = num % 10;
        if (mostLeftDigt !== mostRightDigt) return false;
        num %= maskNum;
        num = Math.floor(num / 10);
        maskNum /= 100;
    }
    return true;
};

// Only single loop with all constant time here, so time/space complexity both are O(n)


