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
    <div>
      {result.map((value, index) => (
        <div className="container" key={index}>
          <p>{index}</p>
          <p>{value.result}</p>
          <p>{value.amount} </p>
          <p>{value.percentage}</p>
        </div>
      ))}
    </div>
  );
};

export default Installments;
