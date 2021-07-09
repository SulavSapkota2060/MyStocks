import React from "react";
import { data } from "./company_data.json";

const Symbols = (props) => {

  return (
    <div>
      <select
        className="form-control "
        id="StockSymbol_Select"
        name="StockSymbol_Select"
      >
        <option value="">Choose A Symbol</option>
        {data.map((company) => (
          <option value={company.symbol}>{company.symbol}</option>
        ))}
      </select>
    </div>
  );
};

export default Symbols;
