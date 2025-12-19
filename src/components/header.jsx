export default function Header({ onSignIn, onSignUp }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/90 backdrop-blur border-b border-slate-200">
      <div className="w-5/6 mx-auto px-8 h-16 flex items-center justify-between">
        
        <div className="text-lg font-bold tracking-tight">
          Lead<span className="text-indigo-600">Zone</span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={onSignIn}
            className="text-sm text-slate-600 hover:text-slate-900 bg-slate-200 px-4 py-2 rounded-md transition"
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
  );
}
