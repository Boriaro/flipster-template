import React from 'react';
export default function FileUploader({ onFile }) {
  return (
    <input type="file" accept=".csv,.xlsx" onChange={e => onFile(e.target.files[0])} />
  );
}
