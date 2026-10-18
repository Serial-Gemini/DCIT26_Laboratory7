
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-900 px-6 py-4 text-white">
      <Link to="/" className="text-xl font-bold text-red-400">
        Student Portal
      </Link>

      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/faculties">Faculty</Link>
      </div>
    </nav>
  );
}
