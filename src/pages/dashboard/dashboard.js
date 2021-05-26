import React, { useState } from "react";
import "./dashboard.css";
import Table from "../../components/table/table";

const Dashboard = () => {
  const [dashData, changeDashdata] = useState({
    portfolio: 20000,
    shares: 30000,
    worth: 300000,
    profit: 40000,
  });
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
      <Table />
    </div>
  );
};

export default Dashboard;
