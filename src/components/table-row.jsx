import { supabase } from "../supabaseClient";


export default function TableRow(props) {
  console.log(props)

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
      props.setLeads(prev => prev.filter(l => l.id !== id));
    }
  }
  
  return (
    <tr className="border-t border-gray-300 hover:bg-gray-50">
      <td className="px-3 py-3">{props.name}</td>
      <td className="px-3 py-3">{props.number}</td>
      <td className="px-3 py-3">{props.email}</td>
      <td className="px-3 py-3">{props.budget}</td>
      <td className="px-3 py-3">{props.destination}</td>
      <td className="px-3 py-3">{props.date}</td>
      <td className="px-3 py-3 text-blue-500">
        <button 
        onClick={()=> deleteLead(props.id)}  
        className="hover:underline cursor-pointer">
          Delete
          </button> 
          /
        <button className="hover:underline">Edit</button>
      </td>
    </tr>
  )

} 