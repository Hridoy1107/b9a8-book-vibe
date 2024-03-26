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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
