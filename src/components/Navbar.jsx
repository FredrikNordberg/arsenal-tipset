// components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-red-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center hover:opacity-90 transition">
          <img src="/arsenal-tipset-logo.png" alt="Arsenal Tipset Logo" className="h-20 w-auto drop-shadow-lg -my-2" />
        </Link>

        <ul className="flex gap-6 text-sm sm:text-base font-semibold">
          <li><Link to="/">🏠 Startsida</Link></li>
          <li><Link to="/tabell">📊 Tabell</Link></li>
          <li><Link to="/hur-man-spelar">📘 Hur man spelar</Link></li>
          <li><Link to="/matcher">📅 Matcher</Link></li>
        </ul>
      </div>
    </nav>
  );
}





