import React, { useState, useCallback, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { TableAtomState, TableHeader } from "../Atom/Atom";
import "./Table.css";
import PrimaryButton from "../Button/PrimaryBtn";
import { DataInfo } from "./Data";
import { Modal } from "../Modal/Modal";
import { CheckBox } from "./CheckBox";

const TablePage = () => {
  const [state, setState] = useRecoilState<DataInfo[]>(TableAtomState);
  const header = useRecoilValue<string[]>(TableHeader);
  // const [state, setState] = useState<DataInfo[]>([...data]);
  const [name, setName] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [oneData, setOneData] = useState<DataInfo | null>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [checkedValues, setCheckedValues] = useState<boolean[]>([]);

  const handleGetName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleGetLevel = (e: React.ChangeEvent<HTMLInputElement>) => setLevel(e.target.value);

  /**
   * stateの更新
   * @returns
   */
  // const handleAddData = useCallback(() => {
  //   if (!name || !level) {
  //     alert("名前とレベルを入力してください");
  //     return;
  //   }
  //   if (!checkNum(level)) {
  //     alert("レベルには半角数字を入れてください");
  //     return;
  //   }
  //   const dataList = [...state];
  //   dataList.push({ name, level: Number(level) });
  //   setState([...dataList]);
  // }, [state, name, level]);

  const handleAddData = () => {
    if (!name || !level) {
      alert("名前とレベルを入力してください");
      return;
    }
    if (!checkNum(level)) {
      alert("レベルには半角数字を入れてください");
      return;
    }
    const dataList = [...state];
    dataList.push({ name, level: Number(level) });
    setState([...dataList]);
  };

  const handleCheckBoxClick = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    console.log("check");
  }, []);

  /**
   * 数値か判定
   * @param str
   * @returns
   */
  const checkNum = (str: string) => {
    const regexp = new RegExp(/^[-]?([1-9]\d*|0)(\.\d+)?$/);
    return regexp.test(str);
  };

  return (
    <div className="tablePage">
      <div className="inputArea">
        <input placeholder="名前" onChange={handleGetName} />
        <input placeholder="レベル" onChange={handleGetLevel} />
        <PrimaryButton onClick={handleAddData}>追加</PrimaryButton>
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
            <tr key={i} onClick={() => [setShow(true), setOneData(v)]}>
              <td>
                {/* <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleCheckBoxClick}
                  onClick={(e) => e.stopPropagation()}
                /> */}
                <CheckBox id={`${i}`} checked={checked} onChange={handleCheckBoxClick}/>
                {i + 1}
              </td>
              <td>{v.name}</td>
              <td>{v.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>{oneData && <Modal show={show} setShow={setShow} data={oneData} />}</div>
    </div>
  );
};

export default TablePage;
