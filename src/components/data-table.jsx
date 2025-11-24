
export default function Table(params) {
  

  return (
    <section className="mt-6 bg-white rounded-md w-full border border-gray-200">

      <div>
        <table className="w-full text-xs text-left border-collapse">
          <thead className="">
            <tr>
              <th className="px-3 py-3">Name</th>
              <th className="px-3 py-3">Number</th>
              <th className="px-3 py-3">Email</th>
              <th className="px-3 py-3">Budget</th>
              <th className="px-3 py-3">Destination</th>
              <th className="px-3 py-3">Date</th>
              <th className="px-3 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300 hover:bg-gray-50">
              <td className="px-3 py-3">John Fenhas Mekhail</td>
              <td className="px-3 py-3">01232312332</td>
              <td className="px-3 py-3">johnfenhas@gmail.com</td>
              <td className="px-3 py-3">$1,000,000</td>
              <td className="px-3 py-3">Jurian</td>
              <td className="px-3 py-3">11/11/2025</td>
              <td className="px-3 py-3 text-blue-500">
                <button className="hover:underline">Delete</button> /
                <button className="hover:underline">Edit</button>
              </td>
            </tr>
            <tr className="border-t border-gray-300 hover:bg-gray-50">
              <td className="px-3 py-3">Sarah Thompson</td>
              <td className="px-3 py-3">01145798231</td>
              <td className="px-3 py-3">sarah.t@gmail.com</td>
              <td className="px-3 py-3">$250,000</td>
              <td className="px-3 py-3">Osaka</td>
              <td className="px-3 py-3">03/02/2026</td>
              <td className="px-3 py-3 text-blue-500">
                <button className="hover:underline">Delete</button> /
                <button className="hover:underline">Edit</button>
              </td>
            </tr>

            <tr className="border-t border-gray-300 hover:bg-gray-50">
              <td className="px-3 py-3">David Brown</td>
              <td className="px-3 py-3">01562378120</td>
              <td className="px-3 py-3">davidb@outlook.com</td>
              <td className="px-3 py-3">$780,000</td>
              <td className="px-3 py-3">Lisbon</td>
              <td className="px-3 py-3">22/04/2026</td>
              <td className="px-3 py-3 text-blue-500">
                <button className="hover:underline">Delete</button> /
                <button className="hover:underline">Edit</button>
              </td>
            </tr>

            <tr className="border-t border-gray-300 hover:bg-gray-50">
              <td className="px-3 py-3">Emily Davis</td>
              <td className="px-3 py-3">01033456782</td>
              <td className="px-3 py-3">emilydavis@mail.com</td>
              <td className="px-3 py-3">$540,000</td>
              <td className="px-3 py-3">Cairo</td>
              <td className="px-3 py-3">10/10/2025</td>
              <td className="px-3 py-3 text-blue-500">
                <button className="hover:underline">Delete</button> /
                <button className="hover:underline">Edit</button>
              </td>
            </tr>

            <tr className="border-t border-gray-300 hover:bg-gray-50">
              <td className="px-3 py-3">Michael Johnson</td>
              <td className="px-3 py-3">01267543210</td>
              <td className="px-3 py-3">mikejohnson@gmail.com</td>
              <td className="px-3 py-3">$320,000</td>
              <td className="px-3 py-3">Paris</td>
              <td className="px-3 py-3">08/06/2026</td>
              <td className="px-3 py-3 text-blue-500">
                <button className="hover:underline">Delete</button> /
                <button className="hover:underline">Edit</button>
              </td>
            </tr>

            <tr className="border-t border-gray-300 hover:bg-gray-50">
              <td className="px-3 py-3">Olivia Martin</td>
              <td className="px-3 py-3">01599811234</td>
              <td className="px-3 py-3">oliviamartin@icloud.com</td>
              <td className="px-3 py-3">$910,000</td>
              <td className="px-3 py-3">Berlin</td>
              <td className="px-3 py-3">05/12/2025</td>
              <td className="px-3 py-3 text-blue-500">
                <button className="hover:underline">Delete</button> /
                <button className="hover:underline">Edit</button>
              </td>
            </tr>

            <tr className="border-t border-gray-300 hover:bg-gray-50">
              <td className="px-3 py-3">Robert Taylor</td>
              <td className="px-3 py-3">01088899122</td>
              <td className="px-3 py-3">roberttaylor@yahoo.com</td>
              <td className="px-3 py-3">$470,000</td>
              <td className="px-3 py-3">Dubai</td>
              <td className="px-3 py-3">18/09/2026</td>
              <td className="px-3 py-3 text-blue-500">
                <button className="hover:underline">Delete</button> /
                <button className="hover:underline">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


    </section>
  )

}