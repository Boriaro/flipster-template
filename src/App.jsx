import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import CustomColumnBuilder from './components/CustomColumnBuilder';
import DataTable from './components/DataTable';
import { parseFile } from './utils/parseFile';
import { applyFormula } from './utils/applyFormula';
import { exportToXLSX } from './utils/exportFile';
import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const handleFile = file => parseFile(file, setData);
  const handleFormula = f => setData(d => applyFormula(d, f));
  return (
    <div>
      <h1>Flipster Enrichment App</h1>
      <FileUploader onFile={handleFile} />
      <CustomColumnBuilder onFormula={handleFormula} />
      <DataTable data={data} />
      <button onClick={() => exportToXLSX(data)}>Export XLSX</button>
    </div>
  );
}
