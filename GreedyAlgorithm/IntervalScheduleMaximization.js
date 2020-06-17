/**
 * @param {Array<Array<number>>} intervals
 * @return {Array<Array<number>>}
 */
const constructOptimalSchedule = (intervals) => {
    const optimaSchedule = [];

    intervals.sort((a,b) => a[1] - b[1]);

    let lastScheduleIntervalFinish = Number.MIN_SAFE_INTEGER;

    intervals.forEach(interval => {
        const start = interval[0];
        const end = interval[1];

        if(start > lastScheduleIntervalFinish){
            optimaSchedule.push(interval);
            lastScheduleIntervalFinish = end;
        }
    });
    return optimaSchedule
};
