import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ROUTES } from "./routes/routes";

const routes = createBrowserRouter(ROUTES);


function App() {


  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
