import React, { useState, useEffect } from "react";
import "./Modal.css";
import { useSetRecoilState } from "recoil";
import { DataInfo, TableAtomState } from "../Atom/Atom";
import PrimaryButton from "../Button/PrimaryBtn";

interface ModalProp {
  show: boolean;
  setShow: (value: React.SetStateAction<boolean>) => void;
  data: DataInfo;
}

export const Modal = (props: ModalProp) => {
  const { show, setShow, data } = props;
  const setState = useSetRecoilState<DataInfo[]>(TableAtomState);
  const [name, setName] = useState<string>("");
  const [level, setLevel] = useState<string>("");

  useEffect(() => {
    setName(data.name);
    setLevel(String(data.level));
  }, [data]);

  const handleCloseClick = () => setShow(false);
  const handleGetName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleGetLevel = (e: React.ChangeEvent<HTMLInputElement>) => setLevel(e.target.value);

  const handleChangeData = () => {
    if (!checkNum(level)) {
      alert("レベルには半角数字を入れてください");
      return;
    }
    setShow(false);
    setState((prev) => {
      const list = [...prev];
      list.forEach((v, i) => {
        if (v === data) {
          const newObj = { name, level: Number(level) };
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
            <PrimaryButton onClick={handleCloseClick}>close</PrimaryButton>
            <PrimaryButton onClick={handleChangeData}>変更</PrimaryButton>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
