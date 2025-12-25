import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"
import SignIn from "./sign-in"
import SignUp from "./sign-up"
import { useParams, useSearchParams } from "react-router-dom"
import Header from "../components/header"




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



export default function Auth({mode}) {
  // const [newUser, setNewUser] = useState(false)
  let newUser = mode === "signup";
  
  // sign up / sign in switch btn fn

  // function switchUserStates() {
  //   setNewUser(!newUser)
  // } 
   


  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow p-8">

          { newUser ? 

          <SignUp 
          /> : 
          <SignIn 

          /> }

        </div>
      </div>
    </>

  )
}