import React, { useState, useEffect, useMemo } from "react";
import "./calculator.css";
import Symbols from "../../utils/symbols";

const Calculator = () => {
  const [calcInput, changeCalcInput] = useState("");
  const [tradeType, changeTradeType] = useState("Buy");
  const [buyData, changeBuy] = useState({
    symbol: "",
    quantity: 0,
    rate: 0,
    buyPrice: 0,
  });
  const value = useMemo(() => {
    return buyData.quantity * buyData.rate;
  }, [buyData]);

  const commission = useMemo(() => {
    return ((0.5 / 100) * value).toFixed(2);
  }, [value]);

  const total = useMemo(() => {
    if (tradeType === "Buy") {
      return value + Number(commission);
    } else if (tradeType === "Sell") {
      return value - Number(commission);
    }
  }, [value, commission, tradeType]);

  const profit = useMemo(() => {
    return value - buyData.buyPrice * buyData.quantity;
  }, [buyData, value]);

  const tax = useMemo(() => {
    return ((5 / 100) * profit).toFixed(2);
  }, [profit]);

  const netProfit = useMemo(() => {
    return total - tax;
  }, [total, tax]);

  useEffect(() => {
    console.log(buyData);
    const sellButton = document.querySelector("#sellTradeType");
    const buyButton = document.querySelector("#buyTradeType");
    if (tradeType === "Buy") {
      buyButton.classList.add("activeButton");
      sellButton.classList.remove("activeButton");
    } else if (tradeType === "Sell") {
      sellButton.classList.add("activeButton");
      buyButton.classList.remove("activeButton");
    }
  }, [tradeType, buyData]);

  const changeOption = (e) => {
    changeTradeType(e.target.value);
    console.log(e.target.value);
  };

  const changeValue = (e, type) => {
    if (tradeType === "Buy") {
      changeBuy({
        rate: Number(document.querySelector(".rate").value),
        quantity: Number(document.querySelector(".quantityValue").value),
      });
    } else {
      changeBuy({
        rate: Number(document.querySelector(".rate").value),
        buyPrice: Number(document.querySelector(".buyingPriceValue").value),
        quantity: Number(document.querySelector(".quantityValue").value),
      });
    }
  };

  const updateCalc = (e) => {
    if (calcInput === "0") {
      changeCalcInput(e.target.innerHTML);
    } else {
      changeCalcInput(calcInput + e.target.innerHTML);
    }
  };

  return (
    <div className="calculator row customContainer">
      <div className="col-md-6">
        <div className="options">
          <h1>Select the Options below</h1>
          <div className="tradeType mt-5">
            <input
              type="button"
              value="Sell"
              className="optionButton"
              id="sellTradeType"
              onClick={(e) => changeOption(e)}
            />
            &nbsp;
            <input
              type="button"
              value="Buy"
              className="optionButton"
              id="buyTradeType"
              onClick={(e) => changeOption(e)}
            />
          </div>
        </div>

        <div className="results mt-5">
          <div className="buyData">
            <h5>
              Value: <h3>{value}</h3>
            </h5>
            <h5>
              Commission (0.5%): <h3> {commission}</h3>
            </h5>
            <h5>
              Total: <h2>{total}</h2>
            </h5>
          </div>

          {tradeType === "Sell" ? (
            <div className="sellData">
              <h5>
                Profit: <h3>{profit}</h3>
              </h5>
              <h5>
                Tax (5%): <h3> {tax}</h3>
              </h5>
              <h5>
                Net Income: <h2>{netProfit}</h2>
              </h5>
            </div>
          ) : null}
        </div>

        <div className="symbols mt-5">
          <h5>Select Symbol:</h5>
          <Symbols type="Numeric" />
        </div>
        <div className="other">
          <div className="quantity">
            <h5>Quantity</h5>
            <input
              onChange={(e) => changeValue(e, "quantity")}
              className="quantityValue"
              type="number"
            />
          </div>

          {tradeType === "Sell" ? (
            <div className="buyingPrice">
              <h5>Buying Price</h5>
              <input
                onChange={(e) => changeValue(e, "buy")}
                className="buyingPriceValue"
                type="number"
              />
            </div>
          ) : null}

          <div className="ltp">
            <h5>Rate</h5>
            <input
              onChange={(e) => changeValue(e, "ltp")}
              className="rate"
              type="number"
            />
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="calc">
          <div className="row">
            <p id="calcInput">{calcInput}</p>
          </div>

          <div className="calcbuttons mt-4">
            <button onClick={() => changeCalcInput("")} className="calcButton">
              C
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              %
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              /
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              *
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              1
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              2
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              3
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              +
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              4
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              5
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              6
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              -
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              7
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              8
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              9
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              .
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              0
            </button>
            <button onClick={(e) => updateCalc(e)} className="calcButton">
              .
            </button>
            <button
              // eslint-disable-next-line
              onClick={() => changeCalcInput(String(eval(calcInput)))}
              className="calcButton extra"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
