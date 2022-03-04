import React, { useState, useCallback, useEffect } from "react";
import { DataInfo } from "../Atom/Atom";
import "./Table.css";

interface TableProps {
  header: string[];
  data: DataInfo[];
  // checkList: number[];
  // handleClick: (val: DataInfo) => void;
  option?: {
    checkList?: number[];
    handleClick?: (val: DataInfo) => void;
  };
}

const Table = (props: TableProps) => {
  const { header, data, option } = props;
  // const { header, data, checkList, handleClick,option } = props;

  return (
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
          <tr
            className={option?.checkList?.includes(v.id) ? "select" : undefined}
            // className={option?.checkList?.includes(v.id) ? "select" : undefined}
            key={i}
            onDoubleClick={() =>option?.handleClick?.(v)}
            // onDoubleClick={() => option?.handleClick(v)}
          >
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
