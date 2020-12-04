/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/* ideas:
    1. first we need to sort the intervals, so that we can compare each interval
    2. looping through this interval
    3. we only compare the end number of pre interval and the start number of next interval, if there is
     overlapping, then merge them also save them into result; if not overlapping, we need to save both intervals into res.
    4. return res
 */

var merge = function(intervals) {
    // for intervals question, sort the intervals first
    let output = [];
    // sort intervals is using start time: [0] to get start number, interval end time using: [1] to get end number
    intervals.sort((a, b) => a[0]-b[0]);

    for(let i = 0; i < intervals.length; i ++ ){
        let pre = output[output.length-1];
        // variable pre is the last position interval in the output, it will change when looping i
        // if only one interval in this arr or there is no overlapping between current interval start number
        // and pre end number, because interval is sorted, so interval[i] > pre, so we compare pre end number and interval[i] start number
        // then we push this interval[i] into output []
        if(i === 0 || intervals[i][0] > pre[1]){
            output.push(intervals[i])
        } else {
            // if there is overlapping, then we choose the max number as the pre end number
            pre[1] = Math.max(intervals[i][1], pre[1])
        }
    }
    return output
};

