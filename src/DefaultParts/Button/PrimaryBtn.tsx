import React from "react";
import Button from "@material-ui/core/Button";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const PrimaryButton = (props: Props) => {
  const { children, onClick } = props;
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="secondary"
      style={{ margin: "10px" }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
