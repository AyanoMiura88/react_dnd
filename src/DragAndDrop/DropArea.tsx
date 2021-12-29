import React, { useState, useCallback } from "react";
import "./Dnd.css";

const DropArea = () => {
  const [state, setState] = useState<string[]>([]);
  const [view, setView] = useState<string>("");

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

  return (
    <div className="dnd">
      <div className="dndArea" onDragOver={handleDropOver} onDrop={handleDrop}>
        <div className="imageArea">
          DropArea
          {state.map((img, i) => {
            return (
              // クリックした写真をセット
              <div key={i} onClick={() => setView(img)}>
                <img className="dropImage" key={i} src={img} alt="イメージ" />
              </div>
            );
          })}
        </div>
        {/* {state.length && (
          <button className="clearBtn" onClick={handleClear}>
            clear
          </button>
        )} */}
        {state.length ? (
          <button className="clearBtn" onClick={handleClear}>
            clear
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="view">{view && <img className="viewImage" src={view} alt="イメージ" />}</div>
    </div>
  );
};

export default DropArea;
