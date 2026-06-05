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
        path: '/booklist',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/pagestoread',
        element: <PagesToRead></PagesToRead>
      }
    ]
   

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
