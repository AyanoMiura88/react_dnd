import React, { useState, useCallback, useEffect } from "react";
import { DataInfo } from "../Atom/Atom";
import PrimaryButton from "../DefaultParts/Button/PrimaryBtn";
import "./Table.css";

interface TableProps {
  initHeader: string[];
  data: DataInfo[];
  option?: {
    isUpdateBtn?: boolean;
    checkList?: number[];
    doubleClick?: (val: DataInfo) => void;
    handleUpdateClick?: (val: DataInfo) => void;
  };
}

const Table = (props: TableProps) => {
  const { initHeader, data, option } = props;
  const [header, setHeader] = useState([...initHeader]);

  useEffect(() => {
    const headList = [...initHeader];
    option?.isUpdateBtn && headList.push("");
    setHeader([...headList]);
  }, [option?.isUpdateBtn]);

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
            key={i}
            onDoubleClick={() => option?.doubleClick?.(v)}
          >
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.level}</td>
            {option?.isUpdateBtn && (
              <td>
                <PrimaryButton onClick={() => option?.handleUpdateClick?.(v)}>
                  更新
                </PrimaryButton>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
