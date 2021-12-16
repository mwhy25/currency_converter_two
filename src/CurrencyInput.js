import React from "react";
export const CurrencyInput = (props) => {
  const { amount, currency, symbolsOptions, onAmountChange, onSelectChange } =
    props;
  return (
    <div className="group">
      <input
        type="text"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <select value={currency} onChange={(e) => onSelectChange(e.target.value)}>
        {symbolsOptions.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
       
      </select>
    </div>
  );
};
