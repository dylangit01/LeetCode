/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Set();
    const queue = [];

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
