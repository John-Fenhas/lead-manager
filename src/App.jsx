import { useEffect, useState } from "react"
import Auth from "./components/auth";
import Header from "./components/header";
import MainContent from "./components/main-content";
import { supabase } from "./supabaseClient";
import CheckEmail from "./components/check-your-email";
import HomePage from "./components/home-page";

export default function App (params) {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [session, setSession] = useState(null)
  
  useEffect(()=>{
    async function fetchSession(params) {
      const currentSission = await supabase.auth.getSession();
      console.log(currentSission)
      setSession(currentSission.data.session)
    }
    fetchSession();
  })
  

  
  function logInUser(params) {
    setUserLoggedIn(true)
  }
  function logOutUser(params) {
    setUserLoggedIn(false)
  }


  return (
    <>

    <HomePage />

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
