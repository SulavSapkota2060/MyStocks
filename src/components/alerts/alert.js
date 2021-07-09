import React, { useEffect, useState } from "react";
import "./alert.css";

const Alert = (props) => {
  const removeWarning = (e) => {
    document.querySelector(".alert").style.display = "none";
  };

  useEffect(() => {
    let alertBox = document.querySelector(".alert");
    if (alertBox.style.display === "none") {
      alertBox.style.display = "block";
    }
  });

  return (
    <div>
      <div className="alert">
        {props.type === "success" ? (
          <div className="success alert-message">
            {props.message}
            <i
              style={{ float: "right" }}
              className="fa fa-times cross_icon"
              onClick={(e) => removeWarning(e)}
            ></i>
          </div>
        ) : (
          <div className="error alert-message">
            {props.message}{" "}
            <i
              style={{ float: "right" }}
              className="fa fa-times cross_icon"
              onClick={(e) => removeWarning(e)}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
