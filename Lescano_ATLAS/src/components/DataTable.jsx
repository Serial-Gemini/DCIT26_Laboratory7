
export default function DataTable({ data, columns }) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="border-b border-slate-700">
          {columns.map((column) => (
            <th key={column.key} className="p-3">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr
            key={item._id}
            className="border-b border-slate-800"
          >
            {columns.map((column) => (
              <td key={column.key} className="p-3">
                {item[column.key]}
              </td>
            ))}
          </tr>
        ))}

        {data.length === 0 && (
          <tr>
            <td
              colSpan={columns.length}
              className="p-4 text-center text-slate-400"
            >
              No records found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
