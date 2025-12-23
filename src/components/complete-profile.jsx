import { useState } from "react";

export default function CompleteProfile({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(formData);
  }

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-lg shadow p-10 px-12">

        
        <div className="text-center mb-6">
          <div className="text-2xl font-semibold tracking-tight">
            Lead<span className="text-indigo-600 font-bold">Zone</span>
          </div>
        </div>


        <p className="text-xs text-gray-400 text-center mb-2">
          Step 2 of 2 · Account setup
        </p>

        <h1 className="text-2xl font-semibold text-center mb-2">
          Complete your profile
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          This helps us set up your workspace and personalize your experience.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 outline-none focus:ring-1 focus:ring-black"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company (optional)"
            value={formData.company}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 outline-none focus:ring-1 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded py-2 font-medium hover:bg-indigo-700 transition"
          >
            Continue
          </button>
        </form>

        
        <p className="text-xs text-gray-400 text-center mt-4">
          You can update this information later.
        </p>
      </div>
    </div>
  );
}
