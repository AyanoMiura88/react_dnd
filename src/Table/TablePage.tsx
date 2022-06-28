import React, { useState, useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { DataInfo, TableAtomState, TableHeader } from "../Atom/Atom";
import "./Table.css";
import PrimaryButton from "../DefaultParts/Button/PrimaryBtn";
import { Modal } from "./Modal/Modal";
import Table from "./Table";

const TablePage = () => {
  const [allData, setAllData] = useRecoilState(TableAtomState);
  const [data, setData] = useState([...allData]);
  const header = useRecoilValue(TableHeader);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  /** 更新ボタン押下時一つのデータを表示 */
  const [showDate, setShowData] = useState(false);
  /** 追加ボタン押下時 */
  const [showAddModal, setShowAddModal] = useState(false);
  const [oneData, setOneData] = useState<DataInfo | null>(null);
  const [checkList, setCheckList] = useState<number[]>([]);

  const handleGetName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleGetLevel = (e: React.ChangeEvent<HTMLInputElement>) => setLevel(e.target.value);

  useEffect(() => {
    const allList = [...allData];
    const newList = allList.filter((v) => v.isShow);
    setData([...newList]);
  }, [allData]);

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
    setData([...newList]);
  };

  const handleAddDateClick = () => {
    setShowAddModal(true);
  };

  /**
   * modalの表示
   */
  const handleUpdateClick = (val: DataInfo) => {
    setShowData(true);
    setOneData(val);
  };

  /**
   * セルをダブルクリック処理
   * @param val
   */
  const doubleClick = useCallback(
    (val: DataInfo) => {
      const list = [...checkList];
      if (list.some((num) => num === val.id)) {
        setCheckList(() => list.filter((num) => num !== val.id));
      } else {
        list.push(val.id);
        setCheckList([...list]);
      }
    },
    [checkList]
  );

  /**
   * 選択中のデータ削除
   */
  const handleDeleteData = useCallback(() => {
    const allList = [...allData];
    for (const num of checkList) {
      const oneList = allList[num - 1];
      const changObj = { ...oneList, isShow: false };
      allList[num - 1] = changObj;
    }
    const newList = allList.filter((v) => v.isShow);
    setData([...newList]);
    setAllData([...allList]);
    setCheckList([]);
  }, [checkList]);

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
      <PrimaryButton onClick={handleDeleteData}>選択中のデータを削除</PrimaryButton>
      <Table
        initHeader={header}
        data={data}
        option={{
          checkList,
          doubleClick,
          isUpdateBtn: true,
          handleUpdateClick,
        }}
      />
      {/* <PrimaryButton onClick={handleAddDateClick}>データを追加</PrimaryButton> */}
      <div>
        {
          // 更新ボタン押下時
          oneData && (
            <Modal
              isAddData={false}
              show={showDate}
              setShow={setShowData}
              option={{ data: oneData }}
            />
          )
        }
        {
          // 追加ボタン押下時
          showAddModal && (
            <Modal
              isAddData={true}
              isNullData={true}
              show={showAddModal}
              setShow={setShowAddModal}
              option={{ handleAddData }}
            />
          )
        }
      </div>
    </div>
  );
};

export default TablePage;
