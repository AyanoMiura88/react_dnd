import React from "react";
import "./Modal.css";
import { useRecoilState } from "recoil";
import { TableAtomState } from "../Atom/Atom";
import { DataInfo } from "../Table/Data";
import PrimaryButton from "../Button/PrimaryBtn";

interface ModalProp {
  show: boolean;
  setShow: (value: React.SetStateAction<boolean>) => void;
  data: DataInfo;
}

export const Modal = (props: ModalProp) => {
  const { show, setShow, data } = props;
  const [state, setState] = useRecoilState<DataInfo[]>(TableAtomState);
  const handleClick = () => setShow(false);
  // const handleGetLevel =()=>
  if (show) {
    return (
      <div className="overlay" onClick={handleClick}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <p className="modalHeader">■名前</p>
          <input value={data.name}></input>
          <p className="modalHeader">■レベル</p>
          <input value={data.level}></input>
          <div style={{ marginTop:"30px"}}>
          <PrimaryButton onClick={handleClick}>close</PrimaryButton>
          <PrimaryButton onClick={handleClick}>変更</PrimaryButton>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
