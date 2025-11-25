import { useEffect } from "react"
import { supabase } from "../supabaseClient";



export default function Tittle (props) {
  console.log(props)

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

// OUTSIDE useEffect — because submitForm needs to use this


useEffect(() => {
  const addLeadBtn = document.getElementById("add-lead-btn"); 
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("addLeadModal");
  const form = document.getElementById("leadForm");

  if (!addLeadBtn || !modal || !closeModalBtn || !form) return;

  const modalClick = (e) => {
    if (e.target === modal) closeModal();
  };

  addLeadBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", modalClick);
  form.addEventListener("submit", (e) => submitForm(e, props.setLeads));

  return () => {
    addLeadBtn.removeEventListener("click", openModal);
    closeModalBtn.removeEventListener("click", closeModal);
    modal.removeEventListener("click", modalClick);
    form.removeEventListener("submit", (e) => submitForm(e, props.setLeads));
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

    <section className="w-full flex justify-between ">
      <div className="flex items-center">
        <p className="text-sm font-semibold">
          Leads Dashboard 
        </p>
      </div>
    
      <div className="flex gap-2 h-8">
        <div className="
        flex
        flex-row 
        justify-center 
        items-center 
        h-full 
        min-w-48
        bg-[#ebebeb] 
        px-2 
        rounded-md 
        focus-within:border 
        focus-within:border-gray-400
        focus-within:shadow-[0_0_8px_rgba(75,85,99,0.65)]
        ">

          <svg fill="#6B7280" width="12px" height="12px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#6B7280"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fillRule="evenodd"></path> </g></svg>

          <input 
          id="search"
          type="text"
          placeholder="Search Leads..."
          className="
          bg-[#ebebeb] 
          min-w-8
          pl-3
          text-xs
          placeholder-gray-500
          bg-blend-difference
          focus:outline-none
          focus:ring-0
          "
          />  

        </div>

        <div className="h-auto w-auto">
          
          <button id="add-lead-btn" className="bg-black text-sm text-gray-50 w-24 rounded-md h-full cursor-pointer">
          +  Add Lead 
          </button>
          
        </div>
      </div>



      
      <div id="addLeadModal"
          className="fixed inset-0 bg-black/10 backdrop-blur-sm hidden items-center justify-center z-50">

        <div className="bg-white w-full max-w-lg rounded-md shadow-lg p-6 relative">

          
          <button id="closeModalBtn"
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl cursor-pointer">
            ×
          </button>

          <h2 className="text-xl font-semibold mb-4">Add New Lead</h2>

          <form id="leadForm" className="space-y-4">

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



    </section>

  )
}