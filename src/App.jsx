import { useEffect, useState } from "react"
import Auth from "./components/auth";
import Header from "./components/header";
import MainContent from "./components/main-content";
import { supabase } from "./supabaseClient";
import CheckEmail from "./components/check-your-email";
import HomePage from "./components/home-page";
import Footer from "./components/footer";
import { createBrowserRouter } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/sign-in',
      element: <Auth />
    }
  ])
export default function App (params) {

  
  




  return (
    <>
    <Header />
    <MainContent />
    {/* <HomePage /> */}
    {/* {
    userLoggedIn 
      ?
      <>
        <Header />
        <MainContent />
      </>
      :
      <Auth 
      userLoggedIn = {userLoggedIn}
      logInUser = {logInUser}
      logOutUser = {logOutUser}

      />
    } */}


    </>


  )
}
