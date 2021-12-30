import React from "react";

interface CheckProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = (props: CheckProps) => {
  const { id, checked, onChange } = props;
  return (
    <input
      type="checkbox"
      id={id}
      onClick={(e) => e.stopPropagation()}
      checked={checked}
      onChange={onChange}
    />
  );
};
