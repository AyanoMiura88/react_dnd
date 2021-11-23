import React from "react";
import Button2 from "@material-ui/core/Button";

interface Props {
  onClick: () => void;
}


const PrimaryButton = (props: Props) => {
  const { onClick } = props;
  return (
    <div style={{margin:"10px"}}>
      <Button2 onClick={onClick} variant="contained" color="primary" >
        LOGIN
      </Button2>
    </div>
  );
};

export default PrimaryButton;
