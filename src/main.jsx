import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

 import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import ListedBooks from './Component/ListedBooks/ListedBooks';
import PagesToRead from './Component/PagesToRead/PagesToRead';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import BookDetails from './Component/BookDetails/BookDetails';
import ReadingList from './Component/Reading List/ReadingList';
import WishList from './Component/WishList/WishList';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path:'/pagestoread',
        element: <PagesToRead></PagesToRead>
      },
      {
        path:'/book/:Id',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('books.json')
      },
      {
        path:'/readlist',
        element:<ReadingList></ReadingList>,
        loader: () => fetch('books.json') 
      },
 
       {
             path:'/wishlist',
             element:<WishList></WishList>
       }

    ]
  

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
