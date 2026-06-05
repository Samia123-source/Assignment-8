
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
;

const Book = ({book}) => {
    const{Id,Book_Img, Book_Name, By, Genre, Rating, Tags, Category} = book;
    return (
       <div className="card card-compact bg-white text-black shadow-xl">
  <figure>
    <img
      src={Book_Img}
      alt="book-img" className="h-40"/>
  </figure>
 <div>
     <div className="card-body">
        <p className="text-green-600">
            {
               Tags.map((tag, idx) => <span key={idx}> <a href="">{tag}</a></span>) 
            }
        </p>

        <Link to={`/book/${Id}`}>
         <button>
        <h2 className="card-title text-2xl">{Book_Name}</h2>
        </button>
        </Link>
        
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