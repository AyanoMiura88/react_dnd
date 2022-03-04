import React, { useState, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { DataInfo, TableAtomState, TableHeader } from "../Atom/Atom";
import "./Table.css";
import PrimaryButton from "../DefaultParts/Button/PrimaryBtn";
import { Modal } from "../DefaultParts/Modal/Modal";
import Table from "./Table";

const TablePage = () => {
  const [allData, setAllData] = useRecoilState(TableAtomState);
  const [state, setState] = useState([...allData]);
  const header = useRecoilValue(TableHeader);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [show, setShow] = useState(false);
  const [oneData, setOneData] = useState<DataInfo | null>(null);
  const [checkList, setCheckList] = useState<number[]>([]);

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
    const allList = [...allData];
    allList.push({
      id: allList[allList.length - 1].id + 1,
      isShow: true,
      name,
      level: Number(level),
    });
    const newList = allList.filter((v) => v.isShow);

    setAllData([...allList]);
    setState([...newList]);
  };

  /**
   * 選択中のデータ削除
   */
  const handleDeleteData = () => {
    const allList = [...allData];
    for (const num of checkList) {
      const oneList = allList[num - 1];
      const changObj = { ...oneList, isShow: false };
      allList[num - 1] = changObj;
    }
    const newList = allList.filter((v) => v.isShow);
    setState([...newList]);
    setAllData([...allList]);
    setCheckList([]);
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
      <Table
        header={header}
        data={state}
        checkList={checkList}
        setCheck={setCheckList}
        setShow={setShow}
        setOneData={setOneData}
      />
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
