import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useEffect } from "react";
import Tittle from "./tittle";
import Table from "./data-table";
import Filters from "./filters";


export default function MainContent () {

  const [leads, setLeads] = useState([])

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
    />
    <Table 
      leads = {leads}
      setLeads = {setLeads}
    />
    </>
  )


}