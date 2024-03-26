const getStoredReadList =
() =>{
    const storedReadList = localStorage.getItem('readList')
    if(storedReadList){
        return JSON.parse(storedReadList);
    }
    return[];
}
const saveReadList = bookId =>{
    const storedReadLists = getStoredReadList();
    const exists = storedReadLists.find(readId => readId === bookId);
    if(!exists){
        storedReadLists.push(bookId);
        localStorage.setItem('readList', JSON.stringify(storedReadLists))
    }
}

export {getStoredReadList, saveReadList}