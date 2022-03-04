import React, { useState } from "react";

/**
 * checkBoxのcheck管理カスタムフック
 */
export const useCheckBox = () => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checkedValues.includes(e.target.id)) {
      setCheckedValues(
        checkedValues.filter((checkedValue) => checkedValue !== e.target.id)
      );
    } else {
      setCheckedValues([...checkedValues, e.target.id]);
    }
  };
  return { checkedValues, setCheckedValues, handleChecked };
};
