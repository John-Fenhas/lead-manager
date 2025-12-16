export default function HomePage({ onSignIn, onSignUp }) {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-50/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          
          {/* Brand */}
          <div className="text-lg font-bold tracking-tight">
            Lead<span className="text-indigo-600">Zone</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button
              onClick={onSignIn}
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              Sign In
            </button>

            <button
              onClick={onSignUp}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="min-h-[calc(100vh-4rem)] flex items-center">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <p className="text-indigo-600 text-sm font-semibold mb-4 uppercase tracking-wide">
                Real Estate Lead CRM
              </p>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
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
                <button
                  onClick={onSignUp}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-md font-semibold transition"
                >
                  Start Free
                </button>

                <button
                  onClick={onSignIn}
                  className="px-8 py-4 rounded-md border border-slate-300 hover:border-slate-400 transition"
                >
                  Sign In
                </button>
              </div>
            </div>

            {/* Right – Product Preview */}
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
      </main>
    </div>
  );
}

/* Components */

function LeadRow({ name, status }) {
  return (
    <div className="flex justify-between items-center bg-slate-50 border border-slate-200 rounded-md px-4 py-2 text-sm">
      <span className="font-medium">{name}</span>
      <span className="text-indigo-600">{status}</span>
    </div>
  );
}
