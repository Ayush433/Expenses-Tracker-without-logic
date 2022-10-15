import React from "react";
import "../Styles/Income.css";
export const Income = () => {
  return (
    <div className="Income">
      <div className="Money">
        <h4>Income</h4>
        <p id="money-plus" className="money-plus">
          +$00
        </p>
      </div>
      <div className="money">
        <h4>Expenses</h4>
        <p id="money-minus" className="money-minus">
          -$00
        </p>
      </div>
    </div>
  );
};
