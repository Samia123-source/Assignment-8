import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveReadingList, saveWishList } from '../Utility/localstorage';
import { ToastContainer, toast } from 'react-toastify';
import { getStoredReadingList,getStoredWishList } from '../Utility/localstorage';
const BookDetails = () => {

    const books = useLoaderData();
    const { Id } = useParams();
    const IdInt = parseInt(Id);
    const book = books.find(book => book.Id === IdInt)
     const [isRead,    setIsRead]    = useState(() => getStoredReadingList().includes(IdInt));
    const [isWished,  setIsWished]  = useState(() => getStoredWishList().includes(IdInt));

    console.log(book);

      const handleReadingList = () => {
        saveReadingList(IdInt);
        setIsRead(true);
        setIsWished(true); 
        toast('You have completed reading the book');
    }

    const handleWishList = () => {
        saveWishList(IdInt);
        setIsWished(true);
        toast('You have successfully saved this book to your wishlist');
    }
    return (
        <div className='bg-white h-auto text-black mx-20 mt-6'>
            <div className='flex max-w gap-10'>
                <div className='w-1/2'>
                    <div className='bg-gray-50 rounded-md p-20 items-center flex flex-row justify-center'>
                        <img src={book.Book_Img} className='h-full' alt="" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <p className='text-3xl font-bold mb-5'> {book.Book_Name}</p>


                    <p className='text-md font-bold mb-2'>By: {book.By}</p>
                    <hr />
                    <p className='text-lg font-bold my-5'>{book.Genre}</p>
                    <hr />
                    <p className='my-4 text-md '><span className='text-md font-bold'>Review: </span>{book.Review}</p>

                    <p className='mb-4 mt-4'>Tag: {book.Tags}</p>
                    <hr />
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row justify-start'>
                            <p className='w-[150px]'>Number of Pages: </p>
                            <p>{book.Number_Of_Pages}</p>
                        </div>
                         <div className='flex flex-row justify-start'>
                            <p className='w-[150px]'>Publisher: </p>
                            <p>{book.Publisher}</p>
                        </div> <div className='flex flex-row justify-start'>
                            <p className='w-[150px]'>Year of Publishing: </p>
                            <p>{book.Year_Of_Publishing}</p>
                        </div> <div className='flex flex-row justify-start'>
                            <p className='w-[150px]'>Rating: </p>
                            <p>{book.Rating}</p>
                        </div>
                        </div>
                        <div className='flex flex-row gap-2'>
                        <div className='flex flex-col gap-2 font-bold justify-start'>
                            <p className='w-[150px]'>Number of Pages: </p>
                          
                   
                
                            <p className='w-[150px]'>Publisher: </p>
                           
                       
                            <p className='w-[150px]'>Year of Publishing: </p>
                          
                     
                            <p className='w-[150px]'>Rating: </p>
                            
                        </div>
                         <div className='flex flex-col gap-2 justify-start'>
                            <p >{book.Number_Of_Pages} </p>
                          
            
                            <p >{book.Publisher} </p>
                           
                       
                            <p >{book.Year_Of_Publishing}</p>
                          
                     
                            <p >{book.Rating}</p>
                            
                        </div>
                        </div>
                     <div className='flex gap-4 mt-4'>
                        <button
                            onClick={handleReadingList}
                            disabled={isRead}
                            className="btn btn-primary p-4 disabled:opacity-50 disabled:cursor-not-allowed">
                            {isRead ? 'Already Read' : 'Read'}
                        </button>
                        <button
                            onClick={handleWishList}
                            disabled={isWished}
                            className="btn btn-primary p-4 text-white bg-[#50B1C9] disabled:opacity-50 disabled:cursor-not-allowed">
                            {isWished ? 'Already Wishlisted' : 'Wishlist'}
                        </button>
                    </div>

                </div>
            </div>

            <div>
                <ToastContainer />
            </div>


        </div>

    );
};

export default BookDetails;