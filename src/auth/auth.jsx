import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"
import { Outlet, useNavigate } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"




  // async function handleSignUp(snapShot) {

  //   const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
  //     email: snapShot.email,
  //     password: snapShot.password,
  //   })
  //   if (signUpError) {
  //     console.error("update error:", signUpError);
  //     return;
  //   }
  //   console.log(signUpData)


  //   // const { data: userRes } = await supabase.auth.getUser();
  //   // console.log("auth user:", userRes.user);

  //   // const { data: profileData, error: profileError } = await supabase.from('profiles').insert({
  //   //   id: signUpData.user.id,
  //   //   first_name: snapShot.firstName,
  //   //   last_name: snapShot.lastName,
  //   //   company_name: snapShot.companyName,
  //   // })
  //   // if (profileError) {
  //   //   console.error("update error:", profileError);
  //   //   return;
  //   // }
  //   // console.log(profileData)

  // }



export default function Auth() {
  
const navigate = useNavigate();

  function onSignUpSuccess() {
    navigate("/auth/check-your-email");
  }
  

   


  return (
    <>
      <Outlet context={{
        onSignUpSuccess,
      }} />
    </>

  )
}