import React, { useState, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { DataInfo, TableAtomState, TableHeader } from "../Atom/Atom";
import "./Table.css";
import { CheckBox } from "./CheckBox";
import { useCheckBox } from "../Hooks/useCheckBox";

interface TableProps {
  state: DataInfo[];
  checkedValues: string[];
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setOneData: React.Dispatch<React.SetStateAction<DataInfo | null>>;
}

const Table = (props: TableProps) => {
  const { state, checkedValues, handleChecked, setShow, setOneData } = props;
  const header = useRecoilValue<string[]>(TableHeader);
  // const [state, setState] = useRecoilState<DataInfo[]>(TableAtomState);
  // const { checkedValues, setCheckedValues, handleChecked } = useCheckBox();
  // const [show, setShow] = useState<boolean>(false);
  // const [oneData, setOneData] = useState<DataInfo | null>(null);

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
        {state.map((v, i) => (
          <tr key={i} onClick={() => [setShow(true), setOneData(v)]}>
            <td onClick={(e) => e.stopPropagation()}>
              <CheckBox
                id={`${i}`}
                checked={checkedValues.includes(`${i}`)}
                onChange={handleChecked}
              />
              {i + 1}
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
