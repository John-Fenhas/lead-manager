import { useEffect, useState } from "react"
import Header from "../components/header";
import MainContent from "../dashboard/main-content.jsx";
import { supabase } from "../supabaseClient";
import CheckEmail from "../auth/check-your-email";
import HomePage from "../pages/Home";
import Footer from "../components/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CompleteProfile from "../auth/complete-profile";
import Auth from "../auth/auth.jsx";







  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/auth/login',
      element: <Auth mode="login" />
    },
    {
      path: '/auth/signup',
      element: <Auth mode="signup" />
    },
    {
      path: '/setup/profile',
      element: <CompleteProfile />
    }
  ])
export default function App (params) {

  
  




  return (

    <RouterProvider router={router} />
  )
}
