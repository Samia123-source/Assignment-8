import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

 import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import PagesToRead from './Component/PagesToRead/PagesToRead';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import BookDetails from './Component/BookDetails/BookDetails';

import ListedBooks from './Component/ListedBooks/ListedBooks';



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
             path:'/listedbooks',
             element:<ListedBooks></ListedBooks>,
             loader: () => fetch('books.json') 

       }

    ]
  

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
