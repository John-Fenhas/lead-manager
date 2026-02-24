import { Outlet } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/header"
import AppShell from "../app/AppShell"




export default function PublicLayout() {


  return (
    <AppShell>    
      <Outlet />
    </AppShell>  
  )

}