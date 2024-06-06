import React, { useEffect, useState, createContext } from "react";
import { Home } from "./Pages/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Header } from "./Components/Header";


export const DataContext = createContext();

const App = () => {
  const Layout = () => {

    
    return (
      <DataContext.Provider >
        <Header/>
        <ScrollRestoration />
        <Outlet />
      </DataContext.Provider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          
        },
       
       
        
      ],
    },
  ]);

  return (
    <div className="min-h-screen bg-fondo">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;


