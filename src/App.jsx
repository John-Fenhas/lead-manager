import { useEffect, useState } from "react"
import Auth from "./components/auth";
import Header from "./components/header";
import MainContent from "./components/main-content";
import { supabase } from "./supabaseClient";

export default function App (params) {


  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}
