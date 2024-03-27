const getStoredList =
() =>{
    const storedList = localStorage.getItem('wishList')
    if(storedList){
        return JSON.parse(storedList);
    }
    return[];
}
const saveWishList = bookId =>{
    const storedWishLists = getStoredList();
    const exists = storedWishLists.find(wishId => wishId === bookId);
    if(!exists){
        storedWishLists.push(bookId);
        localStorage.setItem('wishList', JSON.stringify(storedWishLists))
    }
}

export {getStoredList, saveWishList }