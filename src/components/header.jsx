import { Link } from "react-router-dom";



export default function Header({ onSignIn, onSignUp }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/90 backdrop-blur border-b border-slate-200">
      <div className="w-5/6 mx-auto px-8 h-16 flex items-center justify-between">
        
        <Link to="/"> 
          <div className="text-lg font-bold tracking-tight">
            Lead<span className="text-indigo-600">Zone</span>
          </div>
        </Link>

        <div className="flex items-center gap-6">

          <Link to="/auth/logIn">
            <button
              className="bg-slate-50 text-black border border-slate-300 hover:border-slate-400 px-4 py-2 rounded-md text-sm font-sm transition cursor-pointer"
            >
              Sign In
            </button>
          </Link>

          <Link to="/auth/signUp">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition cursor-pointer"
            >
              Get Started
            </button>
          </Link>

        </div>
      </div>
    </header>
  );
}
