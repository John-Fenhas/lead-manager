import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"
import { Link } from "react-router-dom"



export default function SignIn(props) {
 
  const [signUpFormData, setSignUpFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  async function submitBtn(e) {


  }

  return (
  <>
    <h1 className="text-2xl font-semibold text-center mb-6 text-slate-900">
      Sign In
    </h1>

    <form onSubmit={submitBtn} className="space-y-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-slate-700">Email</label>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 outline-none focus:ring-1 focus:ring-indigo-600"
            value={signUpFormData.email}
            onChange={(e) =>
              setSignUpFormData({ ...signUpFormData, email: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-slate-700">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 outline-none focus:ring-1 focus:ring-indigo-600"
            value={signUpFormData.password}
            onChange={(e) =>
              setSignUpFormData({ ...signUpFormData, password: e.target.value })
            }
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        Continue
      </button>
    </form>

    <div className="text-center mt-6 text-sm text-slate-600">
      Don’t have an account?

      <Link to="/auth/signup">
        <button
          type="button"
          className="font-medium underline ml-1 cursor-pointer text-indigo-600 hover:text-indigo-700"
        >
          Sign up
        </button>
      </Link>

    </div>
  </>

  )
}