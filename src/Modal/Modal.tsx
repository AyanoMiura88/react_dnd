import React from "react";
import { Transition } from "react-transition-group";
import "./Modal.css";
import { DataInfo } from "../Table/Data";
import PrimaryButton from "../Button/PrimaryBtn";

interface ModalProp {
  show: boolean;
  setShow: (value: React.SetStateAction<boolean>) => void;
  data: DataInfo;
}

export const Modal = (props: ModalProp) => {
  const { show, setShow, data } = props;
  const key = Object.keys(data);
  const handleClick = () => setShow(false);
  if (show) {
    return (
      <div className="overlay" onClick={handleClick}>
        <div className="modalContainer">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p className="modalHeader">■名前</p>
            <p>{data.name}</p>
            <p className="modalHeader">■レベル</p>
            <p>{data.level}</p>
            <PrimaryButton onClick={handleClick}>close</PrimaryButton>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
