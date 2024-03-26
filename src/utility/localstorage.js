const getStoredList =
() =>{
    const storedList = localStorage.getItem('readList', 'wishList')
    if(storedList){
        return JSON.parse(storedList);
    }
    return[];
}
const saveReadList = bookId =>{
    const storedReadLists = getStoredList();
    const exists = storedReadLists.find(readId => readId === bookId);
    if(!exists){
        storedReadLists.push(bookId);
        localStorage.setItem('readList', JSON.stringify(storedReadLists))
    }
}

export {getStoredList, saveReadList }