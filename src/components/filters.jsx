import { useEffect } from "react";
import Modal from "./modal";



    ////// modal call btnnn

      <button id="add-lead-btn" className="bg-black text-sm text-gray-50 w-24 rounded-md h-full cursor-pointer  
      
      add-lead-btn 
      
      ">
      +  Add Lead 
      </button>
    
    ///////





export default function Filters(props) {

  console.log(props);
  
  // useEffect(() => {
  //     const btn = document.getElementById("dropdownButton");
  //     const menu = document.getElementById("dropdownMenu");

  //     if (!btn || !menu) return;

  //     const toggleMenu = (e) => {
  //       e.stopPropagation();
  //       menu.classList.toggle("opacity-0");
  //       menu.classList.toggle("scale-95");
  //       menu.classList.toggle("pointer-events-none");
  //     };

  //     const closeMenu = (e) => {
  //       if (!menu.contains(e.target) && !btn.contains(e.target)) {
  //         menu.classList.add("opacity-0", "scale-95", "pointer-events-none");
  //       }
  //     };

  //     const closeOnEscape = (e) => {
  //       if (e.key === "Escape") {
  //         menu.classList.add("opacity-0", "scale-95", "pointer-events-none");
  //       }
  //     };

  //     btn.addEventListener("click", toggleMenu);
  //     document.addEventListener("click", closeMenu);
  //     document.addEventListener("keydown", closeOnEscape);

  //     return () => {
  //       btn.removeEventListener("click", toggleMenu);
  //       document.removeEventListener("click", closeMenu);
  //       document.removeEventListener("keydown", closeOnEscape);
  //     };
  //   }, []);

  return (

    <>
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

          <button id="add-lead-btn" className="bg-black text-sm text-gray-50 w-24 rounded-md h-full cursor-pointer  
          
          add-lead-btn 
          
          "
          onClick={props.modal.open}
          >
          +  Add Lead 
          </button>

          <Modal  
            modal = {props.modal}
            leads = {props.leads}
            setLeads = {props.setLeads}
          />

        </div>
      </div>







    </section>

    <section className="mt-6 bg-white rounded-md w-full border border-gray-200 
    
    ">

      <div className="flex justify-between px-4 items-center h-14">

        <div className="flex items-center">
          <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 5H6C5.5286 5 5.29289 5 5.14645 5.14645C5 5.29289 5 5.5286 5 6V7.96482C5 8.2268 5 8.35779 5.05916 8.46834C5.11833 8.57888 5.22732 8.65154 5.4453 8.79687L8.4688 10.8125C9.34073 11.3938 9.7767 11.6845 10.0133 12.1267C10.25 12.5688 10.25 13.0928 10.25 14.1407V19L13.75 17.25V14.1407C13.75 13.0928 13.75 12.5688 13.9867 12.1267C14.2233 11.6845 14.6593 11.3938 15.5312 10.8125L18.5547 8.79687C18.7727 8.65154 18.8817 8.57888 18.9408 8.46834C19 8.35779 19 8.2268 19 7.96482V6C19 5.5286 19 5.29289 18.8536 5.14645C18.7071 5 18.4714 5 18 5Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          <p className="text-sm">
            Filters:
          </p>
        </div>
        <div className="flex items-center">
          <svg width="12px" height="12px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#6B7280"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="120" height="32" x="184" y="288" fill="var(--ci-primary-color, #6B7280)" className="ci-primary"></rect> <rect width="184" height="32" x="184" y="216" fill="var(--ci-primary-color, #6B7280)" className="ci-primary"></rect> <rect width="248" height="32" x="184" y="144" fill="var(--ci-primary-color, #6B7280)" className="ci-primary"></rect> <rect width="312" height="32" x="184" y="72" fill="var(--ci-primary-color, #6B7280)" className="ci-primary"></rect> <polygon fill="var(--ci-primary-color, #6B7280)" points="95.196 16 95.196 433.568 43.313 381.686 20.687 404.313 111.196 494.823 201.705 404.313 179.078 381.687 127.196 433.568 127.196 16 95.196 16" className="ci-primary"></polygon> </g></svg>
          
           {/* <svg width="64px" height="64px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#6B7280" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="120" height="32" x="184" y="288" fill="var(--ci-primary-color, #6B7280)" className="ci-primary"></rect> <rect width="184" height="32" x="184" y="216" fill="var(--ci-primary-color, #6B7280)" className="ci-primary"></rect> <rect width="248" height="32" x="184" y="144" fill="var(--ci-primary-color, #6B7280)" className="ci-primary"></rect> <rect width="312" height="32" x="184" y="72" fill="var(--ci-primary-color, #6B7280)" className="ci-primary"></rect> <polygon fill="var(--ci-primary-color, #6B7280)" points="95.196 16 95.196 433.568 43.313 381.686 20.687 404.313 111.196 494.823 201.705 404.313 179.078 381.687 127.196 433.568 127.196 16 95.196 16" className="ci-primary"></polygon> </g></svg> */}
        
        
          <div id="dropdown" className="relative bg-[#f3f3f5] flex items-center h-6 w-32">
            <button
              id="dropdownButton"
              className="rounded-md focus:outline-none px-3 w-full text-[0.7rem] text-gray-500 flex justify-between items-center">
              Name A-Z
              <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#aeafb2">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                  fill="#aeafb2"></path>
              </svg>
            </button>

            <ul
              id="dropdownMenu"
              className="absolute left-0 top-full w-32 bg-white border rounded-md shadow-md 
              opacity-0 scale-95 transform transition-all duration-200 ease-out 
              origin-top pointer-events-none z-10">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Item 1</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Item 2</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Item 3</a></li>
            </ul>
          </div>




        </div>

      </div>

    </section>
                      </>
  )

}