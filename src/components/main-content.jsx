import { useState } from "react";
import { useEffect } from "react";
import Tittle from "./tittle";
import Table from "./data-table";
import Filters from "./filters";


export default function MainContent (params) {

  const [leads, setLeads] = useState([])


  return (
    <>
    <Tittle 
    leads = {leads}
    setLeads = {setLeads}
    />
    <Filters />
    <Table />
    </>
  )


}