/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // whenever dealing with Breath First Search, we setup two data structures ==> Queue and Hash-Table;
    const visited = new Set();
    const queue = [];

    // Room would be the node, and mark this Node to the queue and mark it as seen
    queue.push(0);
    visited.add(0);

    while (queue.length > 0){
        const currentRoom = queue.shift();
        for(let key = 0; key < rooms[currentRoom].length; key++){
            if(!visited.has(rooms[currentRoom][key])){
                visited.add(rooms[currentRoom][key]);
                queue.push(rooms[currentRoom][key])
            }
        }
    }
    return visited.size === rooms.length
};
