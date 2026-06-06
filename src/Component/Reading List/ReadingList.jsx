import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadingList } from "../Utility/localstorage";


const ReadingList = () => {
    const books = useLoaderData();
    const[readingList,setReadingList] = useState([]);


    useEffect(()=>{
        const storedReadingList = getStoredReadingList();
        if(books.length>0){
            const listOfReading = [];
            for(const Id of storedReadingList){
                const book = books.find(book => book.Id === Id);
                 if(book){
                listOfReading.push(book)

            }
           
           
            }
            setReadingList(listOfReading);
            // console.log(books,storedReadingList,ListedBooks)
        }
    },[books])
    return (
        <div>
            <h2 className="text-2xl bg-white text-red-400">The book I have read:{readingList.length}</h2>
        </div>
    );
};

export default ReadingList;