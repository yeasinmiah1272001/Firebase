import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './Component/Navbar/Nav.jsx';
import Home from './Component/Navbar/Home/Home.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Nav></Nav>,
    children:[
      {
        path:'/desh',
        element:<div>product page</div>,
      },
      {
        path:'/home',
        element:<Home></Home>
      },
     
    ]
   
    

  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
 // loader: () => fetch('https://dummyjson.com/products')