import { supabase } from "../supabaseClient";
import { useState, useMemo, useEffect } from "react";
import Table from "./data-table";
import Filters from "./filters";
import Modal from "./modal";



export default function MainContent () {

  // leads fetch and state set up

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



  //table logic, fns and state
  
  async function deleteLead(id) {
    const { error } = await supabase
    .from("leads")
    .delete()
    .eq("id", id);  

    if (error) {
      console.log(error);
      return;
    }
    if (!error) {
      setLeads(prev => prev.filter(l => l.id !== id));
    }
  }


  async function addLead(newLead) {
    const { data, error } = await supabase
      .from("leads")
      .insert(newLead)
      .select()
      .single();

    if (error) {
      console.log("insert error:", error);
      return;
   }

    setLeads(prev => [...prev, data]);
  }

  
  async function editLead(id, updatedFields) {
    const { error } = await supabase
      .from("leads")
      .update(updatedFields)
      .eq("id", id);

    if (error) {
      console.error("update error:", error);
      return;
    }

    setLeads(prev =>
      prev.map(lead =>
        lead.id === id
          ? { ...lead, ...updatedFields }
          : lead
      )
    );
  }




  //lead form modal state and fns

  const [selectedLead, setSelectedLead] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  async function addLead(newLead) {
  const { data, error } = await supabase
    .from("leads")
    .insert(newLead)
    .select()
    .single();

  if (error) {
    console.log("insert error:", error);
    return;
  }

  setLeads(prev => [...prev, data]);
  }
  async function editLead(id, updatedFields) {
    const { error } = await supabase
      .from("leads")
      .update(updatedFields)
      .eq("id", id);

    if (error) {
      console.error("update error:", error);
      return;
    }

    setLeads(prev =>
      prev.map(lead =>
        lead.id === id
          ? { ...lead, ...updatedFields }
          : lead
      )
    );
  }



  function openEditModal(lead) {
  setSelectedLead(lead); 
  setIsModalOpen(true);
  }



  const modal = useMemo(() => ({
    isOpen: isModalOpen,
    open: () => setIsModalOpen(true),
    openEdit: openEditModal,
    close: () => setIsModalOpen(false),
  }), [isModalOpen]);




  



  return (
    <>

    <Filters 
      
      modal = {modal}
    />
    
    <Modal  
      modal = {modal}
      addLead = {addLead}
      lead = {selectedLead}
      onEditLead = {editLead}
      selectedLead = {selectedLead}

    />

    <Table 
      leads = {leads}
      onDelete = {deleteLead}
      onEdit = {openEditModal}
    />
    </>
  )


}