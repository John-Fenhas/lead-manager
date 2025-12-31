import { Navigate, Outlet } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/header"
import { useAuth } from "../context/AuthProvider"
import Loader from "../components/loader"






export default function ProtectedLayout() {
  const {session, user, loading} = useAuth()
  
   if (loading) {
    return (
      <Loader/> 
    )
   }  
   
   
   if (!session) {
      return <Navigate to='/auth' replace />
   }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  )
}