import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import './App.css'
import Root from './components/routes/Root';
import Home from './components/home/Home';
import ListedBooks from './components/listedBooks/ListedBooks';
import PagesToRead from './components/pagesToRead/PagesToRead';
import ErrorPage from './components/errorPage/ErrorPage';
import Details from './components/details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/lbs",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/ptr",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/details/:bookId",
        element: <Details></Details>,
        loader: () => fetch('../books.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
