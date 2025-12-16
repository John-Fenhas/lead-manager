import { useState } from "react"
import TableRow from "./table-row"




export default function Table(props) {
  




  

  return (
    <section className="mt-6 bg-white rounded-md w-full border border-gray-200">

      <div>
        <table className="w-full text-xs text-left border-collapse">
          <thead className="">
            <tr>
              <th className="px-3 py-3">Name</th>
              <th className="px-3 py-3">Number</th>
              <th className="px-3 py-3">Email</th>
              <th className="px-3 py-3">Budget</th>
              <th className="px-3 py-3">Destination</th>
              <th className="px-3 py-3">Date</th>
              <th className="px-3 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>

          {props.leads.length > 0 ?   props.leads.map((lead)=>(

            <TableRow 
              key = {lead.id}
              lead = {lead}
              onDelete = {props.onDelete}
              onEdit = {props.onEdit}
            />

            )) : (
            <tr>
              <td
                colSpan="7"
                className="text-center py-6 text-gray-500"
              >
                No leads yet — add your first one!
              </td>
            </tr>
          )}

          </tbody>
        </table>
      </div>


    </section>
  )

}