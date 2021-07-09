import React, { useState, useEffect } from "react";
import "./LTP.css";
import Symbols from "../../utils/symbols";
import { Line } from "react-chartjs-2";
import "axios";
import axios from "axios";

const LTP = () => {
  const [apiData, changeAPIData] = useState([]);
  const [ltps, changeLtps] = useState([]);
  const [labels, changeLabels] = useState([]);

  useEffect(() => {
    console.log("IAM CALLED!");

    axios
      .get(
        "http://localhost:8000/historic_data/AKPL?start_date=2021-04-21&end_date=2021-05-10"
      )
      .then((res) => {
        changeLtps(res.data.map((e) => e.closing_price));
        changeLabels(res.data.map((e) => e.date));
      });
  }, []);

  return (
    <div className="customContainer LTP">
      <h1>Market Analysis</h1>
      {console.log(ltps)}
      <div className="options">
        <h5>
          Select Company: <Symbols />
          <Line
            data={{
              labels: labels,
              datasets: [
                {
                  label: "LTP",
                  data: ltps,
                },
              ],
            }}
          />
        </h5>
      </div>
    </div>
  );
};

export default LTP;
