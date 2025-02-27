import React from "react"
import ReactDOM from "react-dom/client"
import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "@/pages/Home/Home"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/signUp",
    element: (
      <>
        <Header />
        <SignUp />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
        <Footer />
      </>
    ),
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
