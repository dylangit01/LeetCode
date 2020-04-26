/**
 * @param {Array<number>} buildings
 * @return {Array<number>}
 */
const getBuildingsWithAView = (buildings) => {
    const buildingWithView = [];

    for(let i = buildings.length; i >= 0; i--){
        const buildingHeight = buildings[i];

        while (
            // buildingWithView only push the index of buildings, so we can get the buildingHeight as below:
            buildingWithView.length !== 0 && buildingHeight >= buildings[buildingWithView[buildingWithView.length-1]]
            ){
            buildingWithView.pop()
        }
        buildingWithView.push(i);
    }
    return buildingWithView.reverse();
};
