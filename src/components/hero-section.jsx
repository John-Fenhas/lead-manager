import { Link } from "react-router-dom";




export default function HeroSection({ onSignUp, onSignIn }) {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        
        <div>
          <p className="text-indigo-600 text-sm font-semibold mb-4 uppercase tracking-wide">
            Real Estate Lead CRM
          </p>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
            Turn Property <br />
            Leads Into <br />
            Closed Deals
          </h1>

          <p className="text-slate-600 max-w-xl mb-10 text-lg">
            Lead Zone helps real estate agents capture, organize, and follow
            up with leads faster — without spreadsheets or missed
            opportunities.
          </p>

          <div className="flex gap-4">
            <Link to="/auth/signup">
              <button
                onClick={onSignUp}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-md font-semibold transition cursor-pointer"
                >
                Start Free
              </button>
            </Link>

            <Link to="/auth/login">
              <button
                onClick={onSignIn}
                className="px-8 py-4 rounded-md border border-slate-300 hover:border-slate-400 transition cursor-pointer"
                >
                Sign In
              </button>
            </Link>
          
          </div>
        </div>

        
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
          <div className="flex justify-between mb-4 text-sm text-slate-600">
            <span>New Leads</span>
            <span className="text-emerald-600 font-medium">+12 today</span>
          </div>

          <div className="space-y-3">
            <LeadRow name="John Smith" status="New" />
            <LeadRow name="Sarah Ahmed" status="Follow-up" />
            <LeadRow name="Michael Lee" status="Viewing Booked" />
          </div>
        </div>

      </div>
    </section>
  );
}

function LeadRow({ name, status }) {
  return (
    <div className="flex justify-between items-center bg-slate-50 border border-slate-200 rounded-md px-4 py-2 text-sm">
      <span className="font-medium">{name}</span>
      <span className="text-indigo-600">{status}</span>
    </div>
  );
}
