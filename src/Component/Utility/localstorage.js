const getStoredReadingList = () => {
    const storedReadingList = localStorage.getItem('reading-list');
    if(storedReadingList){
        return JSON.parse(storedReadingList);
    }
    return[];
}

const saveReadingList = Id =>{
    const storedReadingList = getStoredReadingList();
    const exists = storedReadingList.find(jobId ===Id);
    if(!exists){
        storedReadingList.push(id);
        localStorage.setItem('reading-list', JSON.stringify(storedReadingList))
    }
}
export{getStoredReadingList,saveReadingList}