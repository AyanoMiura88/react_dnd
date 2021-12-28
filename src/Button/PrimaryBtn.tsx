import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

// const color = makeStyles({
//   main: {
//     backgroundColor: "#e57373",
//     color: "#fff",
//   }
// });

const PrimaryButton = (props: Props) => {
  const { children, onClick } = props;
  // const test = color();
  return (
    <div style={{ margin: "10px" }}>
      <Button onClick={onClick} variant="contained" color="primary">
        {/* <Button onClick={onClick} variant="contained" className={test.main} > */}
        {children}
      </Button>
    </div>
  );
};

export default PrimaryButton;
