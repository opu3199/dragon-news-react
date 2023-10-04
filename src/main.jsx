import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './pages/Home';
import About from './pages/About';
import Carieer from './pages/Carieer';
import Login from './pages/Login';
import Register from './pages/Register';
import Authprovider from './component/Authprovider';
import Newsdetails from './pages/Newsdetails';
import Privateroute from './component/Privateroute';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/news.json')
      },
      {
        path:'/news/:id',
        element:<Privateroute><Newsdetails></Newsdetails></Privateroute>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/carier',
        element:<Carieer></Carieer>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>,
)
