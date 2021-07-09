import React from "react";
import { indicator } from "../../utils/accessories";

const TradeHistoryTable = (props) => {
  return (
    <table cellPadding="20" className="portfolio">
      <thead>
        <tr>
          <th>Date</th>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>Buying Price</th>
          <th>Selling Price</th>
          <th>Total</th>
          <th>Profit</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.userStocks.map((x) => {
          return (
            <tr>
              <td>{x.date}</td>
              <td>{x.stock_symbol}</td>
              <td>{x.quantity}</td>
              <td>{x.buying_price}</td>
              <td>{x.selling_price}</td>
              <td>
                {x.action_type === "SELL"
                  ? x.quantity * x.selling_price
                  : x.quantity * x.buying_price}
              </td>
              <td>
                {x.action_type === "BUY"
                  ? "Not Available"
                  : indicator(x.quantity * (x.selling_price - x.buying_price))}
              </td>

              <td>{x.action_type}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TradeHistoryTable;
