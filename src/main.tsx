import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Home from "@/pages/Home/Home"
import Login from "@/pages/Login/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
