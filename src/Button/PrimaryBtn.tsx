import React from "react";
import Button from "@material-ui/core/Button";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}


const PrimaryButton = (props: Props) => {
  const { children ,onClick } = props;
  return (
    <div style={{margin:"10px"}}>
      <Button onClick={onClick} variant="contained" color="primary" >
        {children}
      </Button>
    </div>
  );
};

export default PrimaryButton;
