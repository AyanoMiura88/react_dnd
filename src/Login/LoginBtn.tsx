import React from "react";
import Button from "@material-ui/core/Button";

interface Props {
  onClick: () => void;
}


const PrimaryButton = (props: Props) => {
  const { onClick } = props;
  return (
    <div style={{margin:"10px"}}>
      <Button onClick={onClick} variant="contained" color="primary" >
        LOGIN
      </Button>
    </div>
  );
};

export default PrimaryButton;
