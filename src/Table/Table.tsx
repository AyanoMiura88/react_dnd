import React, { useState, useCallback, useEffect } from "react";
import { DataInfo } from "../Atom/Atom";
import "./Table.css";

interface TableProps {
  header: string[];
  data: DataInfo[];
  checkList: number[];
  setCheck: React.Dispatch<React.SetStateAction<number[]>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setOneData: React.Dispatch<React.SetStateAction<DataInfo | null>>;
}

const Table = (props: TableProps) => {
  const { header, data, checkList, setCheck, setShow, setOneData } = props;

  const handleClick = (val: DataInfo) => {
    const list = [...checkList];
    if (list.some((num) => num === val.id)) {
      setCheck(() => list.filter((num) => num !== val.id));
    } else {
      list.push(val.id);
      setCheck([...list]);
    }
    // setShow(true);
    // setOneData(val);
  };

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
            className={checkList.includes(v.id) ? "select" : undefined}
            key={i}
            onDoubleClick={() => handleClick(v)}
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
