import React, { useState } from "react";
import Installments from "../Installments";

import "./styles.css";

const Inputs = () => {
  const [value, setValue] = useState("");
  const [tax, setTax] = useState("");
  const [time, setTime] = useState("");

  return (
    <div id="input-component">
      <fieldset>
        <div className="field">
          <input
            type="number"
            name="value"
            id="valueInput"
            min="0"
            placeholder="Capital Inicial"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />

          <input
            type="number"
            name="tax"
            id="taxInput"
            min="-12"
            max="12"
            placeholder="Taxa Juros Mensal"
            onChange={(e) => {
              setTax(e.target.value);
            }}
          />

          <input
            type="number"
            name="time"
            id="timeInput"
            min="0"
            placeholder="Tempo(meses)"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>
      </fieldset>

      {time !== 0 && <Installments value={value} tax={tax} time={time} />}
    </div>
  );
};

export default Inputs;
