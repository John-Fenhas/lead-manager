import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"



export default function SignUp(props) {
 
  const [signUpFormData, setSignUpFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',

  })


  const passwordsMatch =
  signUpFormData.password === signUpFormData.confirmPassword &&
  signUpFormData.confirmPassword.length > 0;

  // sign up submit functions

  function getSnapshotFromState() {
  return {
    firstName: signUpFormData.firstName,
    lastName: signUpFormData.lastName,
    companyName: signUpFormData.companyName,
    email: signUpFormData.email,
    password: signUpFormData.password,
    confirmPassword: signUpFormData.confirmPassword,
    signUp: signUpFormData.signUp,
  }
  }

  async function submitBtn(e) {
    e.preventDefault();
    e.stopPropagation();
    const snapShot = getSnapshotFromState()

    if (passwordsMatch) {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: snapShot.email,
        password: snapShot.password,
      })
      if (signUpError) {
        console.error("update error:", signUpError);
        return;
      }

      console.log(signUpData)      
      console.log('ran')
    }
    else {
      return
    }

  }


 
 
  return (
        <>
          <h1 className="text-2xl font-semibold text-center mb-6">
            Create Account
          </h1>

          <form onSubmit={submitBtn} className="space-y-4">
            <div className="space-y-4">

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="border rounded px-3 py-2"
                  value={signUpFormData.firstName}
                  onChange={(e) =>
                    setSignUpFormData({ ...signUpFormData, firstName: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border rounded px-3 py-2"
                  value={signUpFormData.lastName}
                  onChange={(e) =>
                    setSignUpFormData({ ...signUpFormData, lastName: e.target.value })
                  }
                />
              </div>

              <input
                type="text"
                placeholder="Company"
                className="w-full border rounded px-3 py-2"
                value={signUpFormData.companyName}
                onChange={(e) =>
                  setSignUpFormData({ ...signUpFormData, companyName: e.target.value })
                }
              />

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

                  className={`w-full border rounded px-3 py-2 outline-none focus:ring-1
                              ${
                                !passwordsMatch && signUpFormData.confirmPassword
                                  ? "border-red-500 focus:ring-red-500"
                                  : "focus:ring-black"
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
                <label className="block text-sm mb-1">Confirm Password</label>
                <input
                  type="password"
                  placeholder="••••••••"

                  className={`w-full border rounded px-3 py-2 outline-none focus:ring-1
                              ${
                                !passwordsMatch && signUpFormData.confirmPassword
                                  ? "border-red-500 focus:ring-red-500"
                                  : "focus:ring-black"
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
              className="w-full bg-black text-white py-2 rounded hover:opacity-90"
            >
              Continue
            </button>
          </form>

          <div className="text-center mt-6 text-sm">
            Already have an account?
            <button
              type="button"
              className="font-medium underline ml-1 cursor-pointer"
              onClick={props.switchUserStates}
            >
              Sign in
            </button>
          </div>
        </>

  )
}