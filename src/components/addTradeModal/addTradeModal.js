import React, { useState } from "react";
import "./addTradeModal.css";
import axios from "axios";
import Loader from "../loader/loader";
import Alert from "../alerts/alert";
import { Link } from "react-router-dom";

const AddStockModal = () => {
  const [saving, changeSaving] = useState(false);
  const [alert, changeAlert] = useState();
  const saveData = () => {
    changeSaving(true);
    try {
      axios
        .post("http://localhost:8000/user/add_stock", {
          user: 1,
          stock_symbol: document.querySelector("#stockSymbol").value,
          buying_price: Number(document.querySelector("#buyingPrice").value),
          quantity: Number(document.querySelector("#quantity").value),
          date: document.querySelector("#date").value,
        })
        .then((res) => {
          changeSaving(false);
          if (res.status === 200) {
            changeAlert(
              <Alert type="success" message="Data Added Successfully!" />
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
    <div className="addStockModal customContainer">
      {alert}
      <h1>Add Stock</h1> {saving ? <Loader /> : null}
      <div className="box">
        <div className="box-item">
          <h4>Company</h4> <input type="text" id="stockSymbol" /> <br />
        </div>
        <div className="box-item">
          <p>Buying Price</p> <input type="text" id="buyingPrice" /> <br />
        </div>

        <div className="box-item">
          <h4>Quantity</h4> <input type="text" id="quantity" /> <br />
        </div>

        <div className="box-item">
          <h4>Date</h4>{" "}
          <input type="date" defaultValue="2020-02-20" id="date" />
        </div>
        <div className="box-item mt-5">
          <button onClick={saveData}>
            <i className="fa fa-save"></i> Save
          </button>
          &nbsp;
          <Link to="/myTradeData">
            <button>
              <i className="fa fa-arrow-left"></i> Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddStockModal;
