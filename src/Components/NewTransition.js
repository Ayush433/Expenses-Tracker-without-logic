import React, { useState } from "react";
import "../Styles/Transition.css";
import { Button } from "@mui/material";
import { GlobalContext } from "./GlobalState";

export const NewTransition = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className="Transition">
      <label id="input">ADD New Transition</label>
      <input
        type="text"
        id="fname"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Transition Detail"
      ></input>
      <label id="input">Amount</label>
      <input
        type="text"
        id="fname"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Transition Detail"
      ></input>
      <Button id="pay" variant="contained">
        Payment
      </Button>
    </div>
  );
};
