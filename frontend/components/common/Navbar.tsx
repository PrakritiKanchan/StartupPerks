// import React from "react";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
//       <div className="text-xl font-bold">StartupPerks</div>
//       <ul className="flex space-x-6">
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link href="/deals">Deals</Link>
//         </li>
//         <li>
//           <Link href="/dashboard">Dashboard</Link>
//         </li>
//         <li>
//           <Link href="/auth/login">Login</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">StartupPerks</div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">
            <span className="hover:text-yellow-400 transition-colors duration-300">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="/deals">
            <span className="hover:text-yellow-400 transition-colors duration-300">
              Deals
            </span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <span className="hover:text-yellow-400 transition-colors duration-300">
              Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link href="/auth/login">
            <span className="hover:text-yellow-400 transition-colors duration-300">
              Login
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

