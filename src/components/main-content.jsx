import { supabase } from "../supabaseClient";
import { useState, useMemo, useEffect } from "react";
import Table from "./data-table";
import Filters from "./filters";
import Modal from "./modal";


export default function MainContent () {

  const [leads, setLeads] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modal = useMemo(() => ({
    isOpen: isModalOpen,
    open: () => setIsModalOpen(true),
    close: () => setIsModalOpen(false),
  }), [isModalOpen]);




  async function fetchLeads() {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("id", { ascending: true });
    console.log(data)
    if (error) {
      console.log("fetch error:", error);
      return;
    }

    setLeads(data);
  }

  useEffect(()=>{
    fetchLeads()
  },[])
  



  return (
    <>

    <Filters 
      leads = {leads}
      setLeads = {setLeads}
      modal = {modal}
    />

    <Table 
      leads = {leads}
      setLeads = {setLeads}
    />
    </>
  )


}