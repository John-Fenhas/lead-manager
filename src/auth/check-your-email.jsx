



export default function CheckEmail() {
  return (
    <div className="flex items-center min-h-9/12 justify-center bg-slate-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow px-8 py-10 text-center">
        
        <div className="flex justify-center mb-4">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 7.5v9a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 16.5v-9m19.5 0A2.25 2.25 0 0 0 19.5 5.25h-15A2.25 2.25 0 0 0 2.25 7.5m19.5 0-9.75 6.75L2.25 7.5"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          Check your email
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          We’ve sent a confirmation link to your email
        </p>

        <p className="text-xs text-gray-500">
          Did you receive the email? If not, check your spam folder.
        </p>
      </div>
    </div>
  );
}
