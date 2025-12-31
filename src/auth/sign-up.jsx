import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"
import { Link,useOutletContext } from "react-router-dom";
import CheckEmail from "./check-your-email";




export default function SignUp() {

  
  const [signUpFormData, setSignUpFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  
  const [emailSent, setEmailSent] =useState(false)

  const passwordsMatch =
  signUpFormData.password === signUpFormData.confirmPassword &&
  signUpFormData.confirmPassword.length > 0;

  // sign up submit functions

  const { onSignUpSuccess } = useOutletContext();

  function getSnapshotFromState() {
  return {
    email: signUpFormData.email,
    password: signUpFormData.password,
    confirmPassword: signUpFormData.confirmPassword,
  }
  }

  async function submitBtn(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!passwordsMatch) return;

    const snapShot = getSnapshotFromState();

    console.log(snapShot)

    const { data, error } = await supabase.auth.signUp({
      email: snapShot.email,
      password: snapShot.password,
      options: {
        emailRedirectTo: 'http://localhost:5173/auth/setup-profile'
      },
      
    });

    if (error) {
      console.error("signup error:", error.message);
      return;
    }

    onSignUpSuccess()
  }

                                     
 
 
  return (
    <>
    {emailSent ?
        <CheckEmail />
      :
      <>
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow p-8">
          <h1 className="text-2xl font-semibold text-center mb-6 text-slate-900">
            Create Account
          </h1>

          <form onSubmit={submitBtn} className="space-y-4">
            <div className="space-y-4">

              {/* <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  value={signUpFormData.firstName}
                  onChange={(e) =>
                    setSignUpFormData({ ...signUpFormData, firstName: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  value={signUpFormData.lastName}
                  onChange={(e) =>
                    setSignUpFormData({ ...signUpFormData, lastName: e.target.value })
                  }
                />
              </div>

              <input
                type="text"
                placeholder="Company"
                className="w-full border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                value={signUpFormData.companyName}
                onChange={(e) =>
                  setSignUpFormData({ ...signUpFormData, companyName: e.target.value })
                }
              /> */}

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

                  className={`w-full border rounded px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 outline-none focus:ring-1
                    ${
                      !passwordsMatch && signUpFormData.confirmPassword
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-300 focus:ring-indigo-600"
                    }
                  `}

                  value={signUpFormData.password}
                  onChange={(e) =>
                    setSignUpFormData({ ...signUpFormData, password: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-slate-700">Confirm Password</label>
                <input
                  type="password"
                  placeholder="••••••••"

                  className={`w-full border rounded px-3 py-2 bg-white text-slate-900 placeholder:text-slate-400 outline-none focus:ring-1
                    ${
                      !passwordsMatch && signUpFormData.confirmPassword
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-300 focus:ring-indigo-600"
                    }
                  `}

                  value={signUpFormData.confirmPassword}
                  onChange={(e) =>
                    setSignUpFormData({ ...signUpFormData, confirmPassword: e.target.value })
                  }
                  required
                />
                {!passwordsMatch && signUpFormData.confirmPassword && (
                  <p className="text-sm text-red-500">
                    Passwords do not match
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-slate-600">
            Already have an account?
            
            <Link to="/auth/login">
              <button
                type="button"
                className="font-medium underline ml-1 cursor-pointer text-indigo-600 hover:text-indigo-700"
              >
                Sign in
              </button>
            </Link>

          </div>
        </div>
      </div>

      </>
    }
    </>


  )
}