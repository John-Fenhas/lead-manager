import { useState } from "react"
import TableRow from "./table-row"




export default function Table(props) {
  

  return (
    <section className="mt-6 w-full bg-white rounded-xl border border-slate-200 shadow-sm">

      {/* Table Header */}
      <div className="px-4 py-3 border-b border-slate-200">
        <p className="text-sm font-semibold text-slate-900">
          Leads
        </p>
        <p className="text-xs text-slate-500">
          Manage and track all incoming leads
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse">

          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Number</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Budget</th>
              <th className="px-4 py-3 font-medium">Destination</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {props.leads.length > 0 ? (
              props.leads.map((lead) => (
                <TableRow
                  key={lead.id}
                  lead={lead}
                  onDelete={props.onDelete}
                  onEdit={props.onEdit}
                />
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-12 text-center">
                  <p className="text-sm font-medium text-slate-700">
                    No leads yet
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Add your first lead to get started.
                  </p>
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

    </section>

  )

}