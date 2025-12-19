







export default function Filters(props) {


  


  return (

<>
  <section className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 flex justify-between items-center shadow-sm">
    
    <div className="flex items-center gap-2">
      <p className="text-sm font-semibold text-slate-900">
        Leads Dashboard
      </p>
    </div>

    <div className="flex items-center gap-3 h-8">

      <div
        className="
        flex
        items-center
        h-full
        min-w-56
        bg-slate-100
        px-3
        rounded-md
        border border-transparent
        focus-within:border-indigo-300
        focus-within:shadow-[0_0_0_2px_rgba(99,102,241,0.15)]
        transition
        "
      >
        <svg
          fill="#64748B"
          width="12px"
          height="12px"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
            fillRule="evenodd"
          />
        </svg>

        <input
          id="search"
          type="text"
          placeholder="Search leads…"
          className="
          bg-slate-100
          pl-3
          text-xs
          text-slate-700
          placeholder-slate-400
          focus:outline-none
          focus:ring-0
          w-full
          "
        />
      </div>

      <button
        id="add-lead-btn"
        className="bg-indigo-600 text-xs text-white px-4 rounded-md h-full hover:bg-indigo-700 transition add-lead-btn"
        onClick={props.modal.open}
      >
        + Add Lead
      </button>
    </div>
  </section>


  <section className="mt-4 bg-white border border-slate-200 rounded-xl px-4 h-12 flex justify-between items-center">

    <div className="flex items-center gap-2">
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 5H6C5.5286 5 5.29289 5 5.14645 5.14645C5 5.29289 5 5.5286 5 6V7.96482C5 8.2268 5 8.35779 5.05916 8.46834C5.11833 8.57888 5.22732 8.65154 5.4453 8.79687L8.4688 10.8125C9.34073 11.3938 9.7767 11.6845 10.0133 12.1267C10.25 12.5688 10.25 13.0928 10.25 14.1407V19L13.75 17.25V14.1407C13.75 13.0928 13.75 12.5688 13.9867 12.1267C14.2233 11.6845 14.6593 11.3938 15.5312 10.8125L18.5547 8.79687C18.7727 8.65154 18.8817 8.57888 18.9408 8.46834C19 8.35779 19 8.2268 19 7.96482V6C19 5.5286 19 5.29289 18.8536 5.14645C18.7071 5 18.4714 5 18 5Z"
          stroke="#64748B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-xs font-medium text-slate-700">
        Filters
      </p>
    </div>

    <div className="flex items-center gap-2">
      <svg width="12px" height="12px" viewBox="0 0 512 512" fill="#64748B">
        <rect width="120" height="32" x="184" y="288" />
        <rect width="184" height="32" x="184" y="216" />
        <rect width="248" height="32" x="184" y="144" />
        <rect width="312" height="32" x="184" y="72" />
        <polygon points="95.196 16 95.196 433.568 43.313 381.686 20.687 404.313 111.196 494.823 201.705 404.313 179.078 381.687 127.196 433.568 127.196 16" />
      </svg>

      <div
        id="dropdown"
        className="relative bg-slate-100 h-7 w-32 rounded-md flex items-center"
      >
        <button
          id="dropdownButton"
          className="px-3 w-full text-[0.7rem] text-slate-600 flex justify-between items-center focus:outline-none"
        >
          Name A-Z
          <svg width="12px" height="12px" viewBox="0 0 24 24" fill="#94A3B8">
            <path d="M12 15l-6-6h12l-6 6z" />
          </svg>
        </button>

        <ul
          id="dropdownMenu"
          className="absolute left-0 top-full w-32 bg-white border border-slate-200 rounded-md shadow-md
          opacity-0 scale-95 transform transition-all duration-200 ease-out
          origin-top pointer-events-none z-10"
        >
          <li><a href="#" className="block px-4 py-2 hover:bg-slate-100">Item 1</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-slate-100">Item 2</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-slate-100">Item 3</a></li>
        </ul>
      </div>
    </div>
  </section>
</>


  )

}