import React from "react";
import { useState, useEffect } from "react";
import "./table.css";
import { Link } from "react-router-dom";
import Loader from "../loader/loader";
import DashboardTable from "./DashboardTable";
import TradeHistoryTable from "./TradeHistoryTable";

const Table = (props) => {
  // eslint-disable-next-line
  const [tableData, changeTableData] = useState({
    header: [
      "Date",
      "Symbol",
      "Quantity",
      "LTP",
      "Price",
      "Profit",
      "Status",
      "Actions",
    ],
  });
  const [userStocks, changeUserStocks] = useState([]);
  const [loading, changeLoading] = useState(true);
  const [tableType, changeTableType] = useState("Dashboard");

  const searchItems = () => {
    const searchKey = document.querySelector("#searchBar").value;
    changeUserStocks(
      props.data.filter((data) => data.stock_symbol.startsWith(searchKey))
    );
  };
  const indicator = (num) => {
    if (Math.sign(num) === 1) {
      return <p style={{ color: "rgb(252, 118, 164)" }}>Rs. {num}</p>;
    } else if (Math.sign(num) === -1) {
      return <p style={{ color: "#48be85" }}>Rs. {num}</p>;
    } else {
      return <p style={{ color: "rgb(233, 233, 49)" }}>Rs. {num}</p>;
    }
  };
  useEffect(() => {
    changeUserStocks(props.data);
    changeLoading(false);
  }, [props.data]);

  return (
    <div className="table">
      <div className="tableTop">
        <div className="header">
          <h5>Portfolio</h5>
          <Link to="/myTradeData/addStock">
            <button>Add Stock</button>
          </Link>
        </div>
        <div className="searchBar mt-4">
          <input
            placeholder="Search"
            type="search"
            name=""
            id="searchBar"
            onChange={searchItems}
          />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {props.type === "dashboard" ? (
            <DashboardTable
              sellModal={props.sellModal}
              userStocks={userStocks}
            />
          ) : (
            <TradeHistoryTable userStocks={userStocks} />
          )}
        </div>
      )}
    </div>
  );
};

export default Table;
