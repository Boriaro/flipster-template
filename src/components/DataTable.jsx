import React from 'react';
export default function DataTable({ data }) {
  if (!data.length) return <div>No data loaded.</div>;
  const headers = Object.keys(data[0]);
  return (
    <table border="1">
      <thead>
        <tr>{headers.map(h => <th key={h}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>{headers.map(h => <td key={h}>{row[h]}</td>)}</tr>
        ))}
      </tbody>
    </table>
  );
}
