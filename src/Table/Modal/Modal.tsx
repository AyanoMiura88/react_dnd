import React, { useState, useEffect, useCallback } from "react";
import "./Modal.css";
import { useSetRecoilState } from "recoil";
import { DataInfo, TableAtomState } from "../../Atom/Atom";
import PrimaryButton from "../../DefaultParts/Button/PrimaryBtn";

interface ModalProp {
  isAddData:boolean;
  isNullData?: boolean;
  show: boolean;
  setShow: (value: React.SetStateAction<boolean>) => void;
  option?: {
    data?: DataInfo;
    handleAddData?: () => void;
  };
}

export const Modal = (props: ModalProp) => {
  const { isNullData = false, show, setShow, option } = props;
  const setState = useSetRecoilState<DataInfo[]>(TableAtomState);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    if (!option?.data) {
      return;
    }
    setName(option.data.name);
    setLevel(String(option?.data.level));
  }, [option?.data]);

  const handleCloseClick = () => setShow(false);
  const handleGetName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    []
  );
  const handleGetLevel = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setLevel(e.target.value),
    []
  );

  // const handleAddData = () => {
  //   if (!name || !level) {
  //     alert("名前とレベルを入力してください");
  //     return;
  //   }
  //   if (!checkNum(level)) {
  //     alert("レベルには半角数字を入れてください");
  //     return;
  //   }
  //   const allList = [...allData];
  //   allList.push({
  //     id: allList[allList.length - 1].id + 1,
  //     isShow: true,
  //     name,
  //     level: Number(level),
  //   });
  //   const newList = allList.filter((v) => v.isShow);

  //   setAllData([...allList]);
  //   setData([...newList]);
  // };

  const handleChangeData = () => {
    if (!checkNum(level)) {
      alert("レベルには半角数字を入れてください");
      return;
    }
    setShow(false);
    // dataを新しい物に置き換え
    setState((prev) => {
      const list = [...prev];
      list.forEach((v, i) => {
        if (v === option?.data) {
          const newObj = {
            id: v.id,
            isShow: v.isShow,
            name,
            level: Number(level),
          };
          list.splice(i, 0, newObj);
          list.splice(i + 1, 1);
          return;
        }
      });
      return [...list];
    });
  };

  /**
   * 数値か判定
   * @param str
   * @returns
   */
  const checkNum = (str: string) => {
    const regexp = new RegExp(/^[-]?([1-9]\d*|0)(\.\d+)?$/);
    return regexp.test(str);
  };

  if (show) {
    return (
      <div className="overlay" onClick={handleCloseClick}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <p className="modalHeader">■名前</p>
          <input value={name} onChange={handleGetName}></input>
          <p className="modalHeader">■レベル</p>
          <input value={level} onChange={handleGetLevel}></input>
          <div style={{ marginTop: "30px" }}>
            <PrimaryButton onClick={handleCloseClick}>閉じる</PrimaryButton>
            {/* <PrimaryButton
              onClick={() =>
                isNullData ? handleAddData() : handleChangeData()
              }
            > */}
            <PrimaryButton onClick={handleChangeData}>更新</PrimaryButton>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
