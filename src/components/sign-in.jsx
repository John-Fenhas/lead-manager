import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

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
          <h1 className="text-2xl font-semibold text-center mb-6">
            Sign In
          </h1>

          <form onSubmit={submitBtn} className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full border rounded px-3 py-2 outline-none focus:ring-1 focus:ring-black"
                  value={signUpFormData.email}
                  onChange={(e) =>
                    setSignUpFormData({ ...signUpFormData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border rounded px-3 py-2 outline-none focus:ring-1 focus:ring-black"
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
              className="w-full bg-black text-white py-2 rounded hover:opacity-90"
            >
              Continue
            </button>
          </form>

          <div className="text-center mt-6 text-sm">
            Don’t have an account?
            <button
              type="button"
              className="font-medium underline ml-1 cursor-pointer"
              onClick={props.switchUserStates}
            >
              Sign up
            </button>
          </div>
        </>
  )
}