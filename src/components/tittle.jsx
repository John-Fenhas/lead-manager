
export default function Tittle () {




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

          <svg fill="#6B7280" width="12px" height="12px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#6B7280"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path> </g></svg>

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
          
          <button className="bg-black text-sm text-gray-50 w-24 rounded-md h-full">
          +  Add Lead 
          </button>
          
        </div>
      </div>



      
      <div id="addLeadModal"
          className="fixed inset-0 bg-black bg-opacity-40 hidden items-center justify-center z-50">

        <div className="bg-white w-full max-w-lg rounded-md shadow-lg p-6 relative">

          
          <button id="closeModalBtn"
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl">
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