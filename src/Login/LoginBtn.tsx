import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  radius: string
  width: string;
}

const Button: React.FC<Props> = ({
    border,
    color,
    children,
    height,
    radius,
    width
  }) => {
  return (
    <button
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    {children}
    </button>
  );
}

export default Button;