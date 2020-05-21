/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length === 0) return 0;

    intervals.sort((a,b) => a[1] - b[1]);

    let endOfActiveInt = intervals[0][1];
    // since we choose the first interval as current active interval, the least non-overlap set is one
    let nonOverLappingSet = 1;

    // then we compare the rest intervals with the first one, so i = 1
    for(let i = 1; i < intervals.length; i ++ ){
        const interval = intervals[i]

        const startInt = interval[0];
        const endInt = interval[1];

        if(startInt >= endOfActiveInt){
            endOfActiveInt = endInt;
            nonOverLappingSet++
        }
    }
    return intervals.length - nonOverLappingSet

};
