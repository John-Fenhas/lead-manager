import { useEffect } from "react"
import { supabase } from "../supabaseClient";



export default function AddLeadBtn (props) {

  // useEffect(() => {
  //   const addLeadBtn = document.getElementById("add-lead-btn"); 
  //   const modal = document.getElementById("addLeadModal");
  //   const closeModalBtn = document.getElementById("closeModalBtn");
  //   const form = document.getElementById("leadForm");

  //   if (!addLeadBtn || !modal ||  !closeModalBtn || !form)  return;

  //   const openModal = () => {
  //     modal.classList.remove("hidden");
  //     modal.classList.add("flex");
  //   };

  //   const closeModal = () => {
  //     modal.classList.add("hidden");
  //     modal.classList.remove("flex");
  //   };

  //   const modalClick = (e) => {
  //     if (e.target === modal) closeModal();
  //   };

  //   async function addLead(newLead) {
  //     const { data, error } = await supabase
  //       .from("leads")
  //       .insert([newLead])
  //       .select();

  //     if (error) {
  //       console.log("insert error:", error);
  //       return;
  //     }

  //     props.setLeads(prev => [...prev, data[0]]);
  //   }


  //   const submitForm = async (e) => {
  //     e.preventDefault();

  //     const name = document.getElementById("leadName").value;
  //     const number = document.getElementById("leadNumber").value;
  //     const email = document.getElementById("leadEmail").value;
  //     const budget = document.getElementById("leadBudget").value;
  //     const destination = document.getElementById("leadDestination").value;
  //     const date = document.getElementById("leadDate").value;

  //     const newLead = {
  //       name,
  //       email,
  //       number,
  //       budget,
  //       destination,
  //       date
  //     };

  //     await addLead(newLead);
      
  //     console.log(props.leads)

  //     closeModal();
  //     e.target.reset();
  //   };

  //   addLeadBtn.addEventListener("click", openModal);
  //   closeModalBtn.addEventListener("click", closeModal);
  //   modal.addEventListener("click", modalClick);
  //   form.addEventListener("submit", submitForm);

  //   return () => {
  //     addLeadBtn.removeEventListener("click", openModal);
  //     closeModalBtn.removeEventListener("click", closeModal);
  //     modal.removeEventListener("click", modalClick);
  //     form.removeEventListener("submit", submitForm);
  //   };


  // }, [])  




  useEffect(() => {
    const addLeadBtns = document.querySelectorAll(".add-lead-btn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("addLeadModal");
    const form = document.getElementById("leadForm");

    if (!addLeadBtns.length || !modal || !closeModalBtn || !form) return;

    const modalClick = (e) => {
      if (e.target === modal) closeModal();
    };

    addLeadBtns.forEach((btn) => {
      btn.addEventListener("click", openModal);
    });

    closeModalBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", modalClick);

    const submitHandler = (e) => submitForm(e, props.setLeads);
    form.addEventListener("submit", submitHandler);

    return () => {
      addLeadBtns.forEach((btn) => {
        btn.removeEventListener("click", openModal);
      });
      closeModalBtn.removeEventListener("click", closeModal);
      modal.removeEventListener("click", modalClick);
      form.removeEventListener("submit", submitHandler);
    };
  }, []);



  const openModal = () => {
    const modal = document.getElementById("addLeadModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  };

  const closeModal = () => {
    const modal = document.getElementById("addLeadModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  };

  async function addLead(newLead) {
    const { data, error } = await supabase
      .from("leads")
      .insert(newLead)
      .select();

    if (error) {
      console.log("insert error:", error);
      return;
    }

    props.setLeads(prev => [...prev, data[0]]);
  }

 
  const submitForm = async (e) => {
    e.preventDefault();

    const name = document.getElementById("leadName").value;
    const number = document.getElementById("leadNumber").value;
    const email = document.getElementById("leadEmail").value;
    const budget = document.getElementById("leadBudget").value;
    const destination = document.getElementById("leadDestination").value;
    const date = document.getElementById("leadDate").value;

    const newLead = { 
      name, 
      email, 
      number, 
      budget, 
      destination, 
      date 
    };

    await addLead(newLead);

    closeModal();
    e.target.reset();
  };




  return (

    <>     
         <button id="add-lead-btn" className="bg-black text-sm text-gray-50 w-24 rounded-md h-full cursor-pointer  
         
         add-lead-btn 
         
         ">
          +  Add Lead 
          </button>
          
                
          <div id="addLeadModal"
              className="fixed inset-0 bg-black/10 backdrop-blur-sm hidden items-center justify-center z-50
              
              addLeadModal
              ">

            <div className="bg-white w-full max-w-lg rounded-md shadow-lg p-6 relative">

              
              <button id="closeModalBtn"
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl cursor-pointer
                
                closeModalBtn
                ">
                ×
              </button>

              <h2 className="text-xl font-semibold mb-4">Add New Lead</h2>

              <form id="leadForm" className="space-y-4
              
              leadForm
              ">

                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input type="text" id="leadName"
                    className="w-full border rounded-md p-2" placeholder="Enter full name" />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Number</label>
                  <input type="text" id="leadNumber"
                    className="w-full border rounded-md p-2" placeholder="Enter phone number" />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input type="email" id="leadEmail"
                    className="w-full border rounded-md p-2" placeholder="email@example.com" />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Budget</label>
                  <input type="text" id="leadBudget"
                    className="w-full border rounded-md p-2" placeholder="$10,000" />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Destination</label>
                  <input type="text" id="leadDestination"
                    className="w-full border rounded-md p-2" placeholder="Enter destination" />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Date</label>
                  <input type="date" id="leadDate"
                    className="w-full border rounded-md p-2" />
                </div>

                <button type="submit"
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                  Save Lead
                </button>

              </form>
              
            </div>
          </div>
          </>

  )
}