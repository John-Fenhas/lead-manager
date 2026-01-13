import { useEffect, useState } from "react"



    ////// modal call btnnn

      // <button id="add-lead-btn" className="bg-black text-sm text-gray-50 w-24 rounded-md h-full cursor-pointer  
      
      // add-lead-btn 
      
      // ">
      // +  Add Lead 
      // </button>
    
    ///////

export default function Modal(props) {

  // modal close and open fns and keyboard event listener to close on esc click
  
  const isModalOpen = props.modal.isOpen
  const closeModal = props.modal.close

  useEffect(() => {
  if (!isModalOpen) return;

  const esc = (e) => e.key === "Escape" && closeModal();
  window.addEventListener("keydown", esc);
  return () => window.removeEventListener("keydown", esc);
  }, [isModalOpen]);

 
 
 
  // state for the modal form 
 
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    budget: "",
    destination: "",
    date: ""
  });
  



  // modal data check for edit or add and propagating data acccordingly 
 
  useEffect(() => {
    if (props.selectedLead) {
        setFormData({
        name: props.selectedLead.name || "",
        number: props.selectedLead.number || "",
        email: props.selectedLead.email || "",
        budget: props.selectedLead.budget || "",
        destination: props.selectedLead.destination || "",
        date: props.selectedLead.date || ""
      });
      }else {

      setFormData({
        name: "",
        number: "",
        email: "",
        budget: "",
        destination: "",
        date: ""
      });
    }
  }, [props.selectedLead]);


  // on form submit fn
  
  const submitForm = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (props.selectedLead) {
      await props.onEditLead(props.selectedLead.id, formData);
    } else {      
      await props.addLead(formData);
    }
    setFormData({
        name: "",
        number: "",
        email: "",
        budget: "",
        destination: "",
        date: ""
      });
    closeModal();
  };


  

  return (


    isModalOpen && (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white w-full max-w-lg rounded-md p-6 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
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
              
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border rounded-md p-2" 
                placeholder="Enter full name" 
              
              />

            </div>

            <div>
              <label className="block mb-1 font-medium">Number</label>

              <input 
                type="text" 
                value={formData.number}
                onChange={(e) => setFormData({...formData, number: e.target.value})}
                className="w-full border rounded-md p-2" 
                placeholder="Enter phone number"
             
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>

              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border rounded-md p-2" placeholder="email@example.com" 
                
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Budget</label>
              <input 
                type="text" 
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                className="w-full border rounded-md p-2" 
                placeholder="$10,000" 
              
              />
                
            </div>

            <div>
              <label className="block mb-1 font-medium">Destination</label>
              <input 
                type="text" 
                value={formData.destination}
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
                className="w-full border rounded-md p-2" placeholder="Enter destination" 
                
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Date</label>
              <input 
                type="date" 
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full border rounded-md p-2" 
                
              />
            </div>

            <button type="submit"
              
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 cursor-pointer">
              Save Lead
            </button>

          </form>
      </div>
    </div>
    )
  )
}