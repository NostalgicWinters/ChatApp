import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home";
import LogIn from "./components/LogIn";

function App(){
  const router = createBrowserRouter([{
    path:"/",
    element:<Home />
  },
  {
    path: "/login",
    element: <LogIn />
  }])

  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;