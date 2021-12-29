import React, { useState } from "react";
import "./Table.css";
import Button from "@material-ui/core/Button";
import { data, DataInfo, header } from "./Data";
import { Modal } from "../Modal/Modal";

const TablePage = () => {
  const [state, setState] = useState<DataInfo[]>([...data]);
  // const [state, setState] = useState<DataInfo[]>([]);
  const [name, setName] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [oneData, setOneData] = useState<DataInfo | null>(null);

  const handleGetName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleGetLevel = (e: React.ChangeEvent<HTMLInputElement>) => setLevel(e.target.value);

  /**
   * stateの更新
   * @returns
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
        <Button onClick={handleAddData} variant="contained" color="primary" size="small">
          追加
        </Button>
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
              <td>{i + 1}</td>
              <td>{v.name}</td>
              <td>{v.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {oneData && <Modal show={show} setShow={setShow} data={oneData} />}
      </div>
    </div>
  );
};

export default TablePage;
