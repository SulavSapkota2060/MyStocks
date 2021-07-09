import React from "react";
import { indicator } from "../../utils/accessories";

const DashboardTable = (props) => {
  return (
    <table cellPadding="20" className="portfolio">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>LTP</th>
          <th>Price</th>
          <th>Profit</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.userStocks.map((x) => {
          return (
            <tr>
              <td>{x.stock_symbol}</td>
              <td>{x.quantity}</td>
              <td>{x.ltp}</td>
              <td>{x.buying_price}</td>
              <td>{indicator(x.quantity * (x.ltp - x.buying_price))}</td>
              <td>{x.quantity * x.ltp}</td>
              <td>
                <button onClick={props.sellModal} className="danger">
                  Mark Sold
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DashboardTable;
