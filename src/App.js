import React, { useState, useEffect } from "react";
import "./App.css";
import { CurrencyInput } from "./CurrencyInput";
import axios from "axios";
function App() {
  const BASE_URL =
    "http://data.fixer.io/api/latest?access_key=b01a0d94533afe3504dc7bc2d8ea555b";
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("IDR");
  const [currency2, setCurrency2] = useState("USD");
  // const [rates, setRates] = useState();
  const [symbols, setSymbols] = useState([]);

  // useEffect(() => {
  //   fetch(BASE_URL).then((respone) =>

  //     respone.json()
  //   )
  //   .then((data) => setSymbols([data.base, ...data.rates]));
  // }, []);

  useEffect(() => {
    axios.get(BASE_URL).then((respone) => {
      setSymbols(respone.data.rates);
    });
  }, []);

  function format(number) {
    return number.toFixed(4);
  }
  function handleAmountChange1(amount1) {
    setAmount2(format((amount1 * symbols[currency2]) / symbols[currency1]));
    setAmount1(amount1);
  }
  function handleSelectChange1(currency1) {
    setAmount2(format((amount1 * symbols[currency2]) / symbols[currency1]));
    setCurrency1(currency1);
  }

  function handleAmountChange2(amount2) {
    setAmount1(format((amount2 * symbols[currency1]) / symbols[currency2]));
    setAmount2(amount2);
  }
  function handleSelectChange2(currency2) {
    setAmount1(format((amount2 * symbols[currency1]) / symbols[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div className="App">
      <h1>Converter</h1>
      <CurrencyInput
        symbolsOptions={Object.keys(symbols)}
        amount={amount1}
        currency={currency1}
        onAmountChange={handleAmountChange1}
        onSelectChange={handleSelectChange1}
      />
      <h1>
        ↑↓
        </h1>
      <CurrencyInput
        symbolsOptions={Object.keys(symbols)}
        amount={amount2}
        currency={currency2}
        onAmountChange={handleAmountChange2}
        onSelectChange={handleSelectChange2}
      />
    </div>
  );
}

export default App;
