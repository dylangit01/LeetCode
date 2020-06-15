/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // first making a cache as an Array base box, and the Array length is from 0 to amount + 1, the reason of "+ 1" is because whenever the amount === 0, then "0" corn needed
    // we need to find out the base number of coins before approach to amount, then base number is from amount 0 ~ the required amount
    // and each base box except cache[0] equals amount + one, because each base box maximum coins is amount + used one coin
    const cache = Array(amount + 1);
    cache.fill(amount + 1);
    // The first base box means the amount is 0, so no coin need
    cache[0] = 0;

    // We will loop over the each base box and the amount starts from one to amount
    for(let i = 1; i <= amount; i++){
        // for each base box, we will using each available coin to check the min times to get the amount
        // the if condition is to make sure only the loop happens when the current coin <= the amount, because we cannot using coin $5 to get amount $2
        // so within the if condition, we compare each coin to check the minimum coins we can achieve this amount, e.g. cache[1] = min(12, cache[1-coin[0]] + 1) = 1
        for(let j = 0; j < coins.length; j++){
            if(coins[j] <= i){
                // At the beginning, cache[i] = amount + 1; afterwards, each cache[i] will be updated to the min needed coin
                // we will calculate for each amount of i, the min coin we need to get this amount until we loop to the exact amount to see how many coins need
                // cache[i - coins[j]] + 1 means when we used each coin value, and see if amount(which is i of each loop) minus this value, what base box left and plus used one coin
                cache[i] = Math.min(cache[i], cache[i - coins[j]] + 1)
            }
        }
    }
    // this is tricky, it means if the coins dont have coin value $1, above loop will fail, as no coin can get the amount, and the cache Array amount will larger then amount
    // because if no coin $1, cache[1] will be amount + 1, in this case, no coin can achieve the amount, that's why using cache[amount] > amount ? -1 : cache[amount]
    return cache[amount] > amount ? -1 : cache[amount]
};
