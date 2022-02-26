import React, { useState, useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { DataInfo, TableAtomState, TableHeader } from "../Atom/Atom";
import "./Table.css";
import { CheckBox } from "./CheckBox";
import { useCheckBox } from "../Hooks/useCheckBox";

interface TableProps {
  header: string[];
  data: DataInfo[];
  checkedValues: string[];
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setOneData: React.Dispatch<React.SetStateAction<DataInfo | null>>;
}

const Table = (props: TableProps) => {
  const { header, data, checkedValues, handleChecked, setShow, setOneData } =
    props;
  const [isSelect, setIsSelect] = useState<boolean[]>([]);

  // useEffect(() => {
  //   setIsSelect(() => data.map(() => false));
  // }, [data]);

  const handleClick = (val: DataInfo, index: number) => {
    const select = [...isSelect];
    if (checkedValues.includes(`${index}`)) {
    }
    // setIsSelect(checkedValues.includes(`${index}`));
    // setShow(true);
    setOneData(val);
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
            // className={isSelect ? "select" : undefined}
            key={i}
            onDoubleClick={() => handleClick(v, i)}
          >
            <td onClick={(e) => e.stopPropagation()}>
              <CheckBox
                id={`${i}`}
                checked={checkedValues.includes(`${i}`)}
                onChange={handleChecked}
              />
              {v.id}
            </td>
            <td>{v.name}</td>
            <td>{v.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
