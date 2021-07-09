import React, { useState } from "react";
import "./sellTradeModal.css";
import axios from "axios";
import Loader from "../loader/loader";
import Alert from "../alerts/alert";
import { Link } from "react-router-dom";

const SellTradeModal = (props) => {
  const [saving, changeSaving] = useState(false);
  const [alert, changeAlert] = useState();
  const saveData = () => {
    let stock_symbol = document.querySelector("#stockSymbol").value;
    let data = {
      user: 2,
      stock_symbol: document.querySelector("#stockSymbol").value,
      selling_price: document.querySelector("#sellingPrice").value,
      quantity: document.querySelector("#quantity").value,
      selling_date: document.querySelector("#date").value,
    };
    changeSaving(true);
    try {
      axios
        .post(`http://localhost:8000/user/update_stock/${stock_symbol}`, data)
        .then((res) => {
          changeSaving(false);
          if (res.status === 200) {
            changeAlert(
              <Alert type="success" message="Stock Sold Successfully!" />
            );
          } else {
            changeAlert(<Alert type="error" message="Error Saving Data!" />);
          }
        });
    } catch (error) {
      changeAlert(<Alert type="error" message="Error Saving Data!" />);
    }
  };

  return (
    <div>
      {props.display === "true" ? (
        <div className="sellTradeModal">
          <h1>Sell Stock</h1> {saving ? <Loader /> : null}
          <div className="box">
            {alert}
            <div className="box-item">
              <h5>Company</h5> <input type="text" id="stockSymbol" /> <br />
            </div>
            <div className="box-item">
              <h5>Selling Price</h5> <input type="text" id="sellingPrice" />{" "}
              <br />
            </div>

            <div className="box-item">
              <h5>Quantity</h5> <input type="text" id="quantity" /> <br />
            </div>

            <div className="box-item">
              <h5>Date</h5>{" "}
              <input type="date" defaultValue="2020-02-20" id="date" />
            </div>
            <div className="box-item mt-5">
              <button class="danger" onClick={saveData}>
                <i className="fa fa-sell"></i> Sell
              </button>
              &nbsp;
              <button onClick={props.sellModal}>
                <i className="fa fa-arrow-left"></i> Back
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SellTradeModal;
