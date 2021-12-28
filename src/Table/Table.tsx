import React, { useState } from "react";
import "./Table.css";
import Button from "@material-ui/core/Button";
import { data, header } from "./Data";

const TablePage = () => {
  const [name, setName] = useState("");

  const handleGetName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleAddName = () => {
// const newData = data.push()
  }
  return (
    <div className="tablePage">
      <div className="inputArea">
        <input onChange={ handleGetName }/>
        <Button onClick={ handleAddName } variant="contained" color="primary" size="small">
          名前追加
        </Button>
        <input />
        <Button variant="contained" color="primary" size="small">
          レベル追加
        </Button>
      </div>
      <table className="table">
        <thead className="tableHead">
          <tr>
            {header.map((v, i) => (
              <th key={i} scope="col">
                {v}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tableBody">
          {data.map((v, i) => (
            <tr key={i}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
