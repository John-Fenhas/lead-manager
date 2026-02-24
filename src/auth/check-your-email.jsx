



export default function CheckEmail() {
  return (

  <div className="w-full border border-white/10 backdrop-blur-1xl rounded shadow-[0_20px_60px_rgba(0,0,0,0.55)] px-8 py-10 text-center">
    
    <div className="flex justify-center mb-4">
      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-slate-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 7.5v9a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 16.5v-9m19.5 0A2.25 2.25 0 0 0 19.5 5.25h-15A2.25 2.25 0 0 0 2.25 7.5m19.5 0-9.75 6.75L2.25 7.5"
          />
        </svg>
      </div>
    </div>

    <h1 className="text-xl font-semibold text-white mb-2">
      Check your email
    </h1>

    <p className="text-sm text-slate-300 mb-6">
      We’ve sent a confirmation link to your email
    </p>

    <p className="text-xs text-slate-400">
      Did you receive the email? If not, check your spam folder.
    </p>
  </div>


  );
}
