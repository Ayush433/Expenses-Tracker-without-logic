import React from "react";
import "../Styles/Balance.css";
import Button from "@mui/material/Button";

export const Balance = () => {
  return (
    <div className="Balance">
      <div className="balance">
        <h3>Your Balance</h3>
        <h4 id="number">$4260.00 </h4>
      </div>
      <div className="btn">
        <Button variant="contained">ADD</Button>
      </div>
    </div>
  );
};
