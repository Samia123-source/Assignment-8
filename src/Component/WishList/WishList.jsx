import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredWishList, getStoredReadingList } from '../Utility/localstorage';

const WishList = () => {
    const books = useLoaderData();
    const [wishList, setWishList] = useState([]);
    const [readingList, setReadingList] = useState([]);
    const [activeTab, setActiveTab] = useState('reading');

    useEffect(() => {
        if (books.length > 0) {
            const storedWishList = getStoredWishList();
            const listOfWish = [];
            for (const id of storedWishList) {
                const book = books.find(book => book.Id === parseInt(id));
                if (book) listOfWish.push(book);
            }
            setWishList(listOfWish);

            const storedReadingList = getStoredReadingList();
            const listOfReading = [];
            for (const id of storedReadingList) {
                const book = books.find(book => book.Id === parseInt(id));
                if (book) listOfReading.push(book);
            }
            setReadingList(listOfReading);
        }
    }, [books]);

    return (
        <div className='bg-white h-auto px-20'>

            <div className="tabs">
                <a onClick={() => setActiveTab('reading')}
                    className={`tab tab-lifted  text-black  ${activeTab === 'reading' ? 'bg-green-200' : ''}`}>
                    Reading List ({readingList.length})
                </a>
                <a onClick={() => setActiveTab('wish')}
                    className={`tab tab-lifted  text-black ${activeTab === 'wish' ? 'bg-green-200' : ''}`}>
                    Wish List ({wishList.length})
                </a>
            </div>

            <div className=" bg-white p-6 h-auto">
                {activeTab === 'reading' && (
    <div className="bg-white p-6 min-h-screen">
                        {readingList.length === 0 && <p className="text-gray-400">No books yet.</p>}
                        {readingList.map(book => (
                            <div key={book.Id} className="flex gap-4 items-center border p-3 rounded-xl mb-3">
                                <img src={book.Book_Img} alt={book.Book_Name} className="w-16 h-20 object-cover rounded" />
                                <div>
                                    <p className="font-semibold">{book.Book_Name}</p>
                                    <p className="text-sm text-gray-500">By: {book.By}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'wish' && (
    <div className="bg-white p-6 min-h-screen">
                        {wishList.length === 0 && <p className="text-gray-400">No books yet.</p>}
                        {wishList.map(book => (
                            <div key={book.Id} className="flex gap-4 items-center border p-3 rounded-xl mb-3">
                                <img src={book.Book_Img} alt={book.Book_Name} className="w-16 h-20 object-cover rounded" />
                                <div>
                                    <p className="font-semibold">{book.Book_Name}</p>
                                    <p className="text-sm text-gray-500">By: {book.By}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default WishList;