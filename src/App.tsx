import React, { useEffect, useState } from "react";
import readXlsxFile from "read-excel-file";
import type { Row } from "read-excel-file";

import { Card } from "./components/Card";

import "./App.css";

function App() {
  const [rows, setRows] = useState<Row[]>([]);
  useEffect(() => {}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      readXlsxFile(file).then((fetchedRows) => {
        setRows(fetchedRows.slice(2).filter((row) => row[1] !== null));
      });
    }
  };

  return (
    <div className="App">
      <div className="controls">
        <div className="input-file">
          <label htmlFor="input-file">Выберите excel файл</label>
          <input onChange={handleChange} type="file" id="input-file" />
        </div>
      </div>
      <div className="cards">
        {rows.map((row, index) => {
          return <Card key={index} row={row} />;
        })}
      </div>
    </div>
  );
}

export default App;
