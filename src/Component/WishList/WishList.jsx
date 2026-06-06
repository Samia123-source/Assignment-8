import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredWishList } from '../Utility/localstorage';

const WishList = () => {
    const books = useLoaderData();
    const[wishList, setWishList] = useState([]);

    useEffect(() =>{
        const storedWishList = getStoredWishList();
        if(books.length>0){
            const listOfWish = storedWishList
            .map(id => books.find(books.Id === parseInt(id)))
            .filter(Boolean);
            setWishList(ListOfWish);
        }

    },[books])
    return (
        <div>
            <h2>Books I wish to read:{wishList.length}</h2>
            <div>
                {wishList.map(book=>(
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

export default WishList;