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
          <label className="field-label" htmlFor="value">
            Capital Inicial
          </label>
          <input
            type="number"
            name="value"
            id="valueInput"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />

          <label className="field-label" htmlFor="tax">
            Taxas Juros Mensal
          </label>
          <input
            type="number"
            name="tax"
            id="taxInput"
            min="-12"
            max="12"
            onChange={(e) => {
              setTax(e.target.value);
            }}
          />

          <label className="field-label" htmlFor="time">
            Tempo (meses)
          </label>
          <input
            type="number"
            name="time"
            id="timeInput"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>
      </fieldset>
      <div className="display-results">
        {time !== 0 && <Installments value={value} tax={tax} time={time} />}
      </div>
    </div>
  );
};

export default Inputs;
