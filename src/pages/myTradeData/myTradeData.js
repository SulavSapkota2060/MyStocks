import React, { useState, useEffect } from "react";
import "./myTradeData.css";
import Table from "../../components/table/table";
import axios from "axios";

const MyTradeData = () => {
  const [tradeData, changeTradeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/user/user_trading_history?user_id=1")
      .then((res) => changeTradeData(res.data));
  }, []);

  return (
    <div className="myTradeData customContainer">
      <h1>My Trade History</h1>
      <Table type="history" data={tradeData} />
    </div>
  );
};

export default MyTradeData;
