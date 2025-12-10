import { useEffect, useState } from "react"





export default function Auth() {

  const [signUpForm, setSignUpForm] = useState(false)

  function signUpBtnClick() {

    setSignUpForm((prev)=> !prev)
  }



  




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white rounded-lg shadow p-8">

        <h1 id="authTitle" className="text-2xl font-semibold text-center mb-6">

            {signUpForm ? "Create Account" : "Sign In"}

        </h1>

        <form id="authForm" className="space-y-4">

          {signUpForm ? <div id="signupFields" className="space-y-4">

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First name"
                className="border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border rounded px-3 py-2"
              />
            </div>

            <input
              type="text"
              placeholder="Company"
              className="w-full border rounded px-3 py-2"
            />
          </div>    :     null  }


          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:opacity-90"
          >
            Continue
          </button>
        </form>

        <div className="text-center mt-6 text-sm">

          <span id="toggleText">
            {signUpForm ? "Already have an account?" : "Don’t have an account"}

          </span>

          <button
            id="toggleBtn"
            type="button"
            className="font-medium underline ml-1"
            onClick={signUpBtnClick}
          >
            
            {signUpForm ? "Sign in" : "Sign up"}

          </button>
        </div>

      </div>
    </div>

  )
}