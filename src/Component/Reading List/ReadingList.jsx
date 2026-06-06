import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadingList } from "../Utility/localstorage";


const ReadingList = () => {
    const books = useLoaderData();
    const[readingList,setReadingList] = useState([]);


   useEffect(() => {
    const storedReadingList = getStoredReadingList();
    if (books.length > 0) {
        const listOfReading = storedReadingList
            .map(id => books.find(book => book.Id === parseInt(id))) 
            .filter(Boolean); 
        setReadingList(listOfReading);
    }
}, [books]);
    return (
    <div>
        <h2 className="text-2xl bg-white text-red-400">
            Books I have read: {readingList.length}
        </h2>
        <div>
            {readingList.map(book => (
                <div key={book.Id}>
                    <img src={book.Book_Img} alt={book.Book_Name} />
                    <p>{book.Book_Name}</p>
                    <p>By: {book.By}</p>
                </div>
            ))}
        </div>
    </div>
);
};

export default ReadingList;