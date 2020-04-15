/**
 * @param {string} numAsString
 * @param {number} b1
 * @param {number} b2
 * @return {string}
 */
const changeBase = (numAsString, b1, b2) => {
    const isNegative = numAsString.startsWith("-");

    /*
   * start: If the number has a minus sign "-", then we start decomposing
   * 'numAsString' from index 1 instead of from index 0.
   *
   * maxPower: The power applied to the base that the most significant digit will
   * be multiplied by. Ex: "324" -> maxPower will be 2 since "324" = (3 x 10^2) +
   * (2 x 10^1) + (4 x 10^0) ^ maxPower
   *
   * numberUnderBase10: The number we are slowly going to build
   */

    const start = isNegative ? 1 : 0;
    const maxPower = numAsString.length - 1;
    let numberUnderBase10 = 0;

    /*
    * Loop over every digit & add it to the base 10 integer representation we are
    * building. We will later take this base 10 integer and convert it into b2.
    */

    for (let i = start; i < numAsString.length; i++) {
        const character = numAsString.charAt(i);

        const isPlaceADigit = /^\d+$/.test(character);
        const valueContributedByPlace =
            isPlaceADigit ?
                parseInt(character) :
                character.charCodeAt(0) - 'A'.charCodeAt(0) + 10;

        const positionPowerWeight = maxPower - i;
        numberUnderBase10 += Math.floor(
            valueContributedByPlace * Math.pow(b1, positionPowerWeight)
        );
    }

    if (numberUnderBase10 === 0) {
        return "0";
    } else {
        return (isNegative ? "-" : "") + base10ToNewBase(numberUnderBase10, b2);
    }
}

const base10ToNewBase = (numberUnderBase10, base) => {
    if (numberUnderBase10 === 0) {
        return "";
    }

    // lsd => "least significant digit"
    let lsdAsChar;
    const lsdUnderFinalBase = numberUnderBase10 % base;

    const needsHexConversion = lsdUnderFinalBase >= 10;
    if (needsHexConversion) {
        let asciiValue = ('A'.charCodeAt(0) + lsdUnderFinalBase - 10);
        lsdAsChar = String.fromCharCode(asciiValue)
    } else {
        lsdAsChar = lsdUnderFinalBase.toString()
    }

    const base10NumberWithoutLsd = Math.floor(numberUnderBase10 / base);
    const everythingElseToOurLeft = base10ToNewBase(base10NumberWithoutLsd, base);

    return everythingElseToOurLeft + lsdAsChar;
};
