import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Table from "../../components/table/table";
import axios from "axios";
import SellTradeModal from "../../components/sellTradeModal/SellTradeModal";

const Dashboard = () => {
  const [tradeData, changeTradeData] = useState([]);
  const [showSellModal, changeShowModal] = useState("false");

  const [dashData, changeDashdata] = useState({
    portfolio: 20000,
    shares: 30000,
    worth: 300000,
    profit: 40000,
  });
  useEffect(() => {
    axios
      .get("http://localhost:8000/user/user_stocks?user_id=1")
      .then((res) => changeTradeData(res.data));
  }, []);
  return (
    <div className="customContainer dashboard ">
      <div className="topBar">
        <h1>Dashboard</h1> <br />
        <div className="row">
          <div className="topBarItem col-md-3">
            <i className="fa fa-dollar"></i> <br />
            Total Portfolio: <b>{dashData.portfolio}</b>
          </div>
          <div className="topBarItem col-md-3">
            <i className="fa fa-sort-amount-desc"></i> <br />
            Total Shares: <b>{dashData.shares}</b>
          </div>
          <div className="topBarItem col-md-3">
            <i className="fa fa-money"></i> <br />
            Pr Close Worth: <b>{dashData.worth}</b>
          </div>
          <div className="topBarItem col-md-3">
            <i className="fa fa-exchange"></i>
            <br />
            Net Profit: <b>{dashData.profit}</b>
          </div>
        </div>
      </div>
      <SellTradeModal
        sellModal={() => changeShowModal("false")}
        display={showSellModal}
      />
      <Table
        type="dashboard"
        data={tradeData}
        sellModal={(symbol) =>
          showSellModal === "true"
            ? changeShowModal("false")
            : changeShowModal("true")
        }
      />
    </div>
  );
};

export default Dashboard;
