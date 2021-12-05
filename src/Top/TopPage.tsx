import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryBtn";

const TopPage = () => {
  const history = useHistory();

  const handleOnClickToDnd = useCallback(() => {
    history.push("/DndPage");
  }, []);
  const handleOnClickToTable = useCallback(() => {
    history.push("/TablePage");
	}, []);

  return (
    <div style={{ marginTop: 100 }}>
      <PrimaryButton onClick={handleOnClickToDnd}>Dndへ</PrimaryButton>
      <PrimaryButton onClick={handleOnClickToTable}>Tableへ</PrimaryButton>
    </div>
  );
};

export default TopPage;
