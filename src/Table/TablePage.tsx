import React, { useState, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { DataInfo, TableAtomState, TableHeader } from "../Atom/Atom";
import "./Table.css";
import PrimaryButton from "../Button/PrimaryBtn";
import { Modal } from "../Modal/Modal";
import { CheckBox } from "./CheckBox";
import { useCheckBox } from "../Hooks/useCheckBox";
import Table from "./Table";

const TablePage = () => {
  const [state, setState] = useRecoilState<DataInfo[]>(TableAtomState);
  const header = useRecoilValue<string[]>(TableHeader);
  const { checkedValues, setCheckedValues, handleChecked } = useCheckBox();
  const [name, setName] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [oneData, setOneData] = useState<DataInfo | null>(null);

  const handleGetName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleGetLevel = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLevel(e.target.value);

  /**
   * stateの更新
   */
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

  /**
   * 選択中のデータ削除
   */
  const handleDeleteData = () => {
    const dataList = [...state];
    const checkNum = checkedValues.map((v) => Number(v));
    const newList = dataList.filter(
      (_, i) => !checkNum.some((num) => num === i)
    );
    setState([...newList]);
    setCheckedValues([]);
  };

  /**
   * 数値か判定
   * @param str
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
      {/* <Table /> */}
      {/* <table className="table">
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
      </table> */}
      <PrimaryButton onClick={handleDeleteData}>
        選択中のデータを削除
      </PrimaryButton>
      <div>
        {oneData && <Modal show={show} setShow={setShow} data={oneData} />}
      </div>
    </div>
  );
};

export default TablePage;
