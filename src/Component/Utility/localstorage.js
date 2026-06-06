const getStoredReadingList = () => {
    const storedReadingList = localStorage.getItem('reading-list');
    if(storedReadingList){
        return JSON.parse(storedReadingList);
    }
    return[];
}
 const getStoredWishList = () => {
    const storedWishList = localStorage.getItem('wish-list');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return[];
}

const saveReadingList = (Id) => {
    const storedReadingList = getStoredReadingList();
    const exists = storedReadingList.find(item => item === Id);
    if (!exists) {
        storedReadingList.push(Id);
        localStorage.setItem('reading-list', JSON.stringify(storedReadingList));
    }
}

const saveWishList = (Id) => {
    const storedWishList = getStoredWishList();
    const exists = storedWishList.find(item => item === Id);
    if (!exists) {
        storedWishList.push(Id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
    }
}
export{getStoredReadingList,saveReadingList,getStoredWishList,saveWishList}