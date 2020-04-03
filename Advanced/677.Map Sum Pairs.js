/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.map = {}
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.map[key] = val
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let count = 0;
    for(let key in this.map){
        if(key.indexOf(prefix) === 0) count += this.map[key]
    }
    return count
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */


class MapSumII{
    constructor() {
        this.map = {}
    }

    insert(key, val){
        this.map[key] = val
    }

    mapSum(prefix){
        let sum = 0;
        for(let key in this.map){
            // as long as key starts with the same character as prefix, it === 0
            if(key.indexOf(prefix) === 0) sum += this.map[key];
            // if(prefix === key.substring(0, prefix.length)) sum += this.map[key]
        }
        return sum
    }
}

const mapSumPair = (key, val, prefix)=> {
    const ms = new MapSumII();
    ms.insert(key, val);
    ms.mapSum(prefix)
};
