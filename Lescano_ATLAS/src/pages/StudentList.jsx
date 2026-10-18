
import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load students");
        }
        return response.json();
      })
      .then((data) => setStudents(data))
      .catch((error) => console.error(error));
  }, []);

  const columns = [
    { key: "name", label: "Name" },
    { key: "studentNumber", label: "Student Number" },
    { key: "course", label: "Course" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">Student List</h1>

        <p className="mt-3 text-slate-400">
          Total Students: {students.length}
        </p>

        <div className="mt-8 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-4">
          <DataTable data={students} columns={columns} />
        </div>
      </div>
    </main>
  );
}
