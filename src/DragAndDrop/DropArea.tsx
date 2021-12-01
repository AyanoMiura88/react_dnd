import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Dnd.css";

const DropArea = () => {
  const [state, setState] = useState<string[]>([]);
  const [view, setView] = useState<string>("");
  const history = useHistory();

  const handleDropOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.stopPropagation();
      e.preventDefault();
    },
    [state]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.stopPropagation();
      e.preventDefault();
      handleOnChange(e);
    },
    [state]
  );

  const handleOnChange = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      const file = e.dataTransfer.files;
      const fileList = [...state];
      const reader = new FileReader();
      for (let i = 0; i < file.length; i++) {
        reader.readAsDataURL(file[i]);
        reader.onloadend = () => {
          // stateの更新
          if (typeof reader.result === "string") {
            fileList.push(reader.result);
            setState([...fileList]);
          }
        };
      }
    },
    [state]
  );

  // クリア
  const handleClear = useCallback(() => {
    setState([]);
    setView("");
  }, []);

  const handleOnClick = useCallback(() => {
    history.push("/TablePage");
  }, []);

  return (
    <div className="dnd">
      <Button onClick={handleOnClick}>tableへ</Button>
      <div className="dndArea" onDragOver={handleDropOver} onDrop={handleDrop}>
        <div className="imageArea">
          DropArea
          {state.map((img, i) => {
            return (
              // クリックした写真をセット
              <div key={i} onClick={() => setView(img)}>
                <img className="dropImage" key={i} src={img} alt="image" />
              </div>
            );
          })}
        </div>
        {state.length && (
          <button className="clearBtn" onClick={handleClear}>
            clear
          </button>
        )}
        {/* {state.length ? (
          <button className="clearBtn" onClick={handleClear}>
            clear
          </button>
        ) : (
          <></>
        )} */}
      </div>
      <div className="view">{view && <img className="viewImage" src={view} alt="image" />}</div>
    </div>
  );
};

export default DropArea;
