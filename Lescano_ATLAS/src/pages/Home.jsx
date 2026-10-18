
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-center text-white">
      <h1 className="text-5xl font-bold">
        Welcome to the{" "}
        <span className="text-red-400">Student Portal</span>
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-slate-400">
        Manage students, faculty, and campus information
        through one organized system.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Link
          to="/students"
          className="rounded-lg bg-red-500 px-6 py-3 font-semibold"
        >
          View Students
        </Link>

        <Link
          to="/faculties"
          className="rounded-lg border border-slate-600 px-6 py-3"
        >
          View Faculty
        </Link>
      </div>
    </main>
  );
}
