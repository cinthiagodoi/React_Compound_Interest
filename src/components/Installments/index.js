import React, { useEffect, useState } from "react";

import "./styles.css";

const Installments = (props) => {
  const { value, tax, time } = props;
  const [result, setResult] = useState([]);

  const handleCount = (capitalValue) => {
    let amountValue = (capitalValue * (1 + tax / 100)).toFixed(2);
    return amountValue;
  };

  useEffect(() => {
    let capitalValue = [];
    let addedValue = 0;
    let allData = [];

    for (let i = 0; i < time; i++) {
      let lastValue = capitalValue[capitalValue.length - 1];
      addedValue = i === 0 ? value : lastValue;
      if (tax < 0) {
        addedValue = addedValue - (addedValue - handleCount(addedValue));
      }
      capitalValue.push(handleCount(addedValue));

      const result = handleCount(addedValue);
      const amount = (result - value).toFixed(2);
      const percentage = ((amount * 100) / value).toFixed(2);

      const data = {
        result,
        amount,
        percentage,
      };

      allData.push(data);
      setResult(allData);
    }
  }, [props]);

  return (
    <div className="cards">
      {result.map((value, index) => (
        <div
          className={value.amount < 0 ? "negative-card" : "card"}
          key={index}
        >
          <p className="index-position">{index + 1}</p>

          <p className="value">R$ {value.result}</p>
          <p className="amount">R$ {value.amount}</p>
          <p className="percentage">% {value.percentage}</p>
        </div>
      ))}
    </div>
  );
};

export default Installments;
