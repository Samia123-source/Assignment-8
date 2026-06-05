import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveReadingList } from '../Utility/localstorage';
import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
   
    const books = useLoaderData();
    const{Id} = useParams();
    const IdInt= parseInt(Id);
    const book = books.find(book => book.Id === IdInt)
    console.log(book);

    const handleReadingList = () =>{
        saveReadingList(IdInt);
        toast('You have read the book');
        
    }
    return (
        <div className='bg-white text-black mx-20 mt-6'>
           <div className='flex max-w gap-6'>
               <div>
                <img src={book.Book_Img} alt="" />
            </div>
            <div>
               <p className='text-3xl'> {book.Book_Name}</p>
                <p>By:{book.By}</p>
                <hr />
                <p>{book.Genre}</p>
                <hr />
                <p>{book.Review}</p>
                  <hr />
                   <p>Tag: {book.Tags}</p>
                   <hr />
                   <p>Number of Pages: {book.Number_Of_Pages}</p>
                   <p>Publisher:{book.Publisher}</p>
                   <p>Year of Publishing:{book.Year_Of_Publishing}</p>
                   <p>Rating:{book.Rating}</p>
                   <div>
                      <button onClick={handleReadingList} className="btn btn-primary w-full">Read</button>
                   </div>
            
            </div>
           </div>
         
         <div>

         </div>
                

              <ToastContainer />   
            </div>
      
    );
};

export default BookDetails;