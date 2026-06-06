import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveReadingList, saveWishList } from '../Utility/localstorage';
import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
   
    const books = useLoaderData();
    const{Id} = useParams();
    const IdInt= parseInt(Id);
    const book = books.find(book => book.Id === IdInt)
    console.log(book);

    const handleReadingList = () =>{
        saveReadingList(IdInt);
        toast('You have completed reading the book');
        
    }

     const handleWishList = () =>{
        saveWishList(IdInt);
        toast('You have successfully saved this book to your wishtlist');
        
    }
    return (
        <div className='bg-white h-screen text-black mx-20 mt-6'>
           <div className='flex max-w gap-6'>
               <div className='w-1/2'>
                <img src={book.Book_Img} alt="" />
            </div>
            <div className='w-1/2'>
               <p className='text-3xl'> {book.Book_Name}</p>
                <p>By:{book.By}</p>
                <hr />
                <p>{book.Genre}</p>
                <hr />
                <p className='mb-4'>{book.Review}</p>
                 
                   <p className='mb-4 mt-4'>Tag: {book.Tags}</p>
                   <hr />
                   <div className='mt-4'>
                    <p>Number of Pages: {book.Number_Of_Pages}</p>
                   <p>Publisher:{book.Publisher}</p>
                   <p>Year of Publishing:{book.Year_Of_Publishing}</p>
                   <p>Rating:{book.Rating}</p>
                   </div>
                   <div className='flex gap-4 mt-4'>
                      <button onClick={handleReadingList} className="btn btn-primary p-4">Read</button>
                      <button onClick={handleWishList} className="btn btn-primary p-4 text-white bg-[#50B1C9]">Wishlist</button>
                   </div>
            
            </div>
           </div>
         
         <div>
<ToastContainer/>
         </div>
                

            </div>
      
    );
};

export default BookDetails;