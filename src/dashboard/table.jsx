import { useState } from "react"
import TableRow from "./table-row"

export default function Table(props) {
  return (
    <main className="mt-6 w-5/6 bg-white/5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
      <div className="px-4 py-4 border-b border-white/10">
        <p className="text-sm font-semibold text-white">
          Leads
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Manage and track all incoming leads
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse">
          <thead className="bg-white/5 text-slate-300 border-b border-white/10">
            <tr>
              <th className="px-4 py-3 font-medium">Status</th>     

              <th className="px-4 py-3 font-medium">
                <button onClick={()=> props.handleSort("name")}
                  className="flex items-center gap-3"
                  >
                  Name
                  <div className="flex flex-col leading-none">
                    <svg viewBox="0 0 10 6" 
                    className={props.sortBy === "name" && props.sortDir === "asc" ?"w-1.5 h-1.5 fill-current opacity-60" : "w-1.5 h-1.5 fill-current opacity-30"}>

                      <path d="M5 0L10 6H0Z" />
                    </svg>
                    <svg viewBox="0 0 10 6" 
                    className={props.sortBy === "name" && props.sortDir === "desc" ?"w-1.5 h-1.5 fill-current opacity-60" : "w-1.5 h-1.5 fill-current opacity-30"}>

                      <path d="M0 0h10L5 6Z" />
                    </svg>

                  </div>
                </button>
              </th>

              <th className="px-4 py-3 font-medium">Number</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">
                <button onClick={ ()=> props.handleSort("budget")}
                  className="flex items-center gap-3"
                  >
                  Budget
                  <div className="flex flex-col leading-none">
                    <svg viewBox="0 0 10 6" 
                    className={props.sortBy === "budget" && props.sortDir === "asc" ?"w-1.5 h-1.5 fill-current opacity-60" : "w-1.5 h-1.5 fill-current opacity-30"}>

                      <path d="M5 0L10 6H0Z" />
                    </svg>
                    <svg viewBox="0 0 10 6" 
                    className={props.sortBy === "budget" && props.sortDir === "desc" ?"w-1.5 h-1.5 fill-current opacity-60" : "w-1.5 h-1.5 fill-current opacity-30"}>

                      <path d="M0 0h10L5 6Z" />
                    </svg>

                  </div>
                </button>
                </th>
              <th className="px-4 py-3 font-medium">Destination</th>
              <th className="px-4 py-3 font-medium">Call Recap</th>
              <th className="px-4 py-3 font-medium">
                <button onClick={ ()=> props.handleSort("date")}
                  className="flex items-center gap-3"
                  >
                    Date
                  <div className="flex flex-col leading-none">
                    <svg viewBox="0 0 10 6" 
                    className={props.sortBy === "date" && props.sortDir === "asc" ?"w-1.5 h-1.5 fill-current opacity-60" : "w-1.5 h-1.5 fill-current opacity-30"}>

                      <path d="M5 0L10 6H0Z" />
                    </svg>
                    <svg viewBox="0 0 10 6" 
                    className={props.sortBy === "date" && props.sortDir === "desc" ?"w-1.5 h-1.5 fill-current opacity-60" : "w-1.5 h-1.5 fill-current opacity-30"}>

                      <path d="M0 0h10L5 6Z" />
                    </svg>

                  </div>
                </button>
                </th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/10">
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
                <td colSpan="7" className="py-14 text-center">
                  <p className="text-sm font-medium text-slate-200">
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
    </main>
  )
}
