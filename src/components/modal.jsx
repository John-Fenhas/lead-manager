import { useEffect } from "react"
import { supabase } from "../supabaseClient";







export default function Modal(props) {

  
  const isOpen = props.modal.isOpen
  const close = props.modal.close

  if (!isOpen) return null;
    useEffect(() => {
    if (!isOpen) return;

    const esc = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
    }, [isOpen]);


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
    e.stopPropagation();  

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

    e.target.reset();
    close()
  };


  

  return (



    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      onClick={close}
    >
      <div
        className="bg-white w-full max-w-lg rounded-md p-6 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 text-xl cursor-pointer"
        >
          ×
        </button>

          <h2 className="text-xl font-semibold mb-4">Add New Lead</h2>

          <form id="leadForm" onSubmit={submitForm} className="space-y-4
          
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
              
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 cursor-pointer">
              Save Lead
            </button>

          </form>
      </div>
    </div>

  )
}