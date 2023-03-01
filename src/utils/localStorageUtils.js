function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}


export {
    getLocalStorage,
    setLocalStorage
}