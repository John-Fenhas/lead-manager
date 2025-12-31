export default function Footer() {
  return (
    <footer className="bg-slate-50 flex justify-center">

      <div className="max-w-7xl  px-8 py-12">

      <div className="relative left-1/2 -translate-x-1/2 w-[97vw] h-px bg-linear-to-r from-slate-100 via-slate-300 to-slate-100 mb-10" />   
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="text-lg font-bold tracking-tight mb-3">
              Lead<span className="text-indigo-600">Zone</span>
            </div>
            <p className="text-sm text-slate-600 max-w-xs">
              A modern CRM built for real estate professionals to manage leads,
              follow up faster, and close more deals.
            </p>
          </div>

          {/* Product */}
          <FooterColumn
            title="Product"
            links={["Features", "Pricing", "Dashboard"]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={["About", "Contact", "Privacy Policy"]}
          />

          {/* Account */}
          <FooterColumn
            title="Account"
            links={["Sign In", "Sign Up"]}
          />
        </div>


        <div className="relative left-1/2 -translate-x-1/2 w-[97vw] h-px bg-linear-to-r from-slate-100 via-slate-300 to-slate-100 mt-8" />   

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} LeadZone. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Built for real estate teams
          </p>
        </div>

      </div>
    </footer>
  );
}

/* Helper */

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-3">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
