const sessionIdToUserMap = new Map()

function setUser(id, user) {
    sessionIdToUserMap.set(id, user)
}

// async function getUser(id) {
//     sessionIdToUserMap.get(id)
// }

async function getUser(id) {
    return new Promise((resolve) => {
        const user = sessionIdToUserMap.get(id);
        resolve(user);
    });
}

export { setUser, getUser }