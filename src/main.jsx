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
import ListedBooks2 from './components/listedBooks2/ListedBooks2';
import PagesToRead from './components/pagesToRead/PagesToRead';
import ErrorPage from './components/errorPage/ErrorPage';
import Details from './components/details/Details';
import Writer from './components/writer/Writer';
import Query from './components/query/Query';

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
        loader: () => fetch('../books.json')
      },
      {
        path: "/wl",
        element: <ListedBooks2></ListedBooks2>,
        loader: () => fetch('../books.json')
      },
      {
        path: "/ptr",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../books.json')
      },
      {
        path: "/details/:bookId",
        element: <Details></Details>,
        loader: () => fetch('../books.json')
      },
      {
        path: "/writer",
        element: <Writer></Writer>,
      },
      {
        path: "/query",
        element: <Query></Query>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
