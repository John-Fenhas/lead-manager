import { supabase } from "../supabaseClient";


export default function TableRow(props) {



  
  return (
    <tr className="border-t border-gray-300 hover:bg-gray-50">
      <td className="px-3 py-3">{props.lead.name}</td>
      <td className="px-3 py-3">{props.lead.number}</td>
      <td className="px-3 py-3">{props.lead.email}</td>
      <td className="px-3 py-3">{props.lead.budget}</td>
      <td className="px-3 py-3">{props.lead.destination}</td>
      <td className="px-3 py-3">{props.lead.date}</td>
      <td className="px-3 py-3 text-blue-500">
        <button 
        onClick={()=> props.onDelete(props.lead.id)}  
        className="hover:underline cursor-pointer">
          Delete
          </button> 
          /
        <button 
          onClick={()=> props.onEdit(props.lead)}  
          className="hover:underline cursor-pointer">Edit</button>
      </td>
    </tr>
  )

} 