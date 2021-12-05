import React from "react";
import "./Table.css";
import { data, heading } from "./Data";

const TablePage = () => {
  return (
    <div className="tablePage">
      <table className="table">
        <thead className="tableHead">
          <tr>
            {heading.map((v,i) => (
              <th key={i} scope="col">{v}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tableBody">
          {data.map((v,i) => (
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
