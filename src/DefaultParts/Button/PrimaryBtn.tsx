import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const PrimaryButton = (props: Props) => {
  const { children, onClick } = props;
  return (
    // <div style={{ margin: "10px" }}>
    <Button onClick={onClick} variant="contained" color="secondary" style={{ margin: "10px" }}>
      {children}
    </Button>
    // </div>
  );
};

export default PrimaryButton;
