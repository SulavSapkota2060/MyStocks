import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="content">
        <div className="head">
          <h4 align="center">MyStocks</h4>
        </div>
        <div className="menu">
          <Link to="/">
            <li className="listItem">
              <i className="fa fa-home"></i>
              &nbsp; Dashboard
            </li>
          </Link>
          <Link to="/myTradeData">
            <li className="listItem">
              <i className="fa fa-line-chart"></i>
              &nbsp; My Trade History
            </li>
          </Link>
          <Link to="/marketAnalysis">
            <li className="listItem">
              <i className="fa fa-pie-chart"></i>&nbsp; Market Analysis
            </li>
          </Link>
          <Link to="/calculator">
            <li className="listItem">
              <i className="fa fa-calculator"></i>&nbsp; Calculator
            </li>
          </Link>
          <li className="listItem">
            <i className="fa fa-bell-o"></i>&nbsp; Reminder
          </li>
          <li className="listItem">
            <i className="fa fa-envelope"></i>&nbsp; Feedback
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
