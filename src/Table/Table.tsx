import React, { useState } from "react";
import "./Table.css";
import Button from "@material-ui/core/Button";
import { data, DataInfo, header } from "./Data";

const TablePage = () => {
  const [state, setState] = useState<DataInfo[]>([...data]);
  const [name, setName] = useState<string>("");
  const [level, setLevel] = useState<number>(0);

  const handleGetName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleGetLevel = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLevel(Number(e.target.value));
  const handleAddData = () => {
    const dataList = [...state];
    dataList.push({ id: dataList.length + 1, name, level });
    setState([...dataList]);
  };
  return (
    <div className="tablePage">
      <div className="inputArea">
        <input placeholder="名前" onChange={handleGetName} />
        <input placeholder="レベル" onChange={handleGetLevel} />
        <Button onClick={handleAddData} variant="contained" color="primary" size="small">
          追加
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
          {state.map((v, i) => (
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
