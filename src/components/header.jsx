import { supabase } from "../supabaseClient"
import { useEffect } from "react"

export default function Header() {

  // async function testFetch() {
  // const { data, error } = await supabase
  //   .from("your_table_name")
  //   .select("*")

  //   console.log("data:", data)
  //   console.log("error:", error)
  // }

  // useEffect(() => {
  //   testFetch()
  // }, [])

  
  return (
    <header className="fixed top-0 right-0 left-0 h-13 flex justify-center bg-white border border-gray-300">
      <div className="
      w-4/5 flex justify-between items-center h-full
      ">
        <div>
          <svg width="28px" height="28px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" transform="matrix(1, 0, 0, -1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#000000" strokeWidth="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#000000" strokeWidth="1.2" strokeLinecap="round"></path> <path d="M20 12L4 12" stroke="#000000" strokeWidth="1.2" strokeLinecap="round"></path> <path d="M20 17L4 17" stroke="#000000" strokeWidth="1.2" strokeLinecap="round"></path> </g></svg>


          {/* <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 12L4 12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 17L4 17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg> 
         */}

        </div>
        <div>
          <p className="font-semibold">
          DealZone
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 pr-3">



          {/* <svg fill="#ffffff" width="64px" height="64px" viewBox="-3.6 -3.6 43.20 43.20" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="#ffffff" strokeWidth="0.00036" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.072"></g><g id="SVGRepo_iconCarrier"> <title>notification-line</title> <path className="clr-i-outline clr-i-outline-path-1" d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83ZM5.13,28.94a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15a8.74,8.74,0,1,1,17.47,0v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3Z"></path><path className="clr-i-outline clr-i-outline-path-2" d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"></path> <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect> </g></svg> */}



          <svg fill="#000000" width="24px" height="24px" viewBox="-3.6 -3.6 43.20 43.20" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="#000000" strokeWidth="0.00036" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.072"></g><g id="SVGRepo_iconCarrier"> <title>notification-line</title> <path className="clr-i-outline clr-i-outline-path-1" d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83ZM5.13,28.94a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15a8.74,8.74,0,1,1,17.47,0v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3Z"></path><path className="clr-i-outline clr-i-outline-path-2" d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"></path> <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect> </g></svg>      

          <p className="w-7 h-7 bg-slate-600 text-slate-300 flex items-center justify-center  rounded-2xl">
            JF
          </p>
        </div>
      </div>
    </header>
  )


}