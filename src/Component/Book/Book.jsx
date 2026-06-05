
import { FaRegStar } from "react-icons/fa6";

const Book = ({book}) => {
    const{Book_Img, Book_Name, By, Genre, Rating, Category} = book;
    return (
       <div className="card card-compact bg-white text-black shadow-xl">
  <figure>
    <img
      src={Book_Img}
      alt="book-img" className="h-40"/>
  </figure>
 <div>
     <div className="card-body">
    <h2 className="card-title text-2xl">{Book_Name}</h2>
    <p>By : {By}</p>
    <div className="flex">
        <p>{Genre}</p>
        <h2 className="flex gap-2">{Rating}<FaRegStar className="text-xl"></FaRegStar></h2>
     
    </div>
  </div>
 </div>
</div>
    );
};

export default Book;