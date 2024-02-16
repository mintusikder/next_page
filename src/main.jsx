import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Books from "./component/Books.jsx";
import BookDetails from "./component/BookDetails.jsx";
import ErrorPage from "./component/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ],
  },
  {
    path: "/about",
    element: <p>about us</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
