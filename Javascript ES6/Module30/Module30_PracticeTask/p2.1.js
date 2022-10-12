// const dil = ['dil', 'mahmud', 'khan'];
const friends = (arr) => {
    let newFriend = [];
    for (let i = 0; i < arr.length; i++) {
        const friend = arr[i];
        if (friend.length % 2 == 0) {
            newFriend.push(friend);
        }
    }
    return newFriend;
}
const newFriends = friends(dil);
console.log(newFriends);

