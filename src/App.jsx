import { useEffect, useState } from "react"
import Auth from "./components/auth";
import Header from "./components/header";
import MainContent from "./components/main-content";
import { supabase } from "./supabaseClient";
import CheckEmail from "./components/check-your-email";
import HomePage from "./components/home-page";
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CompleteProfile from "./components/complete-profile";




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
