import React, { useState, useEffect } from "react";
import "./marketAnalysis.css";
import Symbols from "../../utils/symbols";
import { Line, Bar } from "react-chartjs-2";
import "axios";
import axios from "axios";
import Loader from "../../components/loader/loader";
import Alert from "../../components/alerts/alert";

const MarketAnalysis = () => {
  const [ltps, changeLtps] = useState([]);
  const [labels, changeLabels] = useState([]);
  const [totalTurnover, changeTotalTurnOver] = useState([]);
  const [loading, changeLoading] = useState(false);
  const [alert, changeAlert] = useState(null);
  const [currentRange, changeCurrentRange] = useState();

  const updateData = (duration) => {
    changeCurrentRange(duration);
    changeLoading(true);
    const company = document.querySelector("#StockSymbol_Select").value;
    axios
      .get(`http://localhost:8000/historic_beta/${company}?range=${duration}`)
      .then((res) => {
        if (res.data.length === 0) {
          changeAlert(
            <Alert
              display="true"
              type="error"
              message="Couldn't find the data for the requested company!"
            />
          );
        }
        changeLtps(res.data.map((e) => e.closing_price));
        changeLabels(res.data.map((e) => e.date));
        changeTotalTurnOver(res.data.map((e) => e.traded_shares));
        changeLoading(false);
      });
  };

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <div className="customContainer marketAnalysis">
      <h1>Market Analysis</h1>
      {alert}
      <div className="options">
        <h5 className="mt-4">
          <Symbols type="Symbol" />
        </h5>
        <div className="filterButtons">
          <button
            className="mt-3 filter-button weekFilter"
            onClick={() => updateData("week")}
          >
            1W
          </button>
          <button
            className="mt-3 filter-button monthFilter"
            onClick={() => updateData("month")}
          >
            1M
          </button>
          <button
            className="mt-3 filter-button maxFilter"
            onClick={() => updateData("max")}
          >
            Max
          </button>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="charts">
          <Line
            width="700"
            height="700"
            options={{ responsive: false, maintainAspectRatio: false }}
            data={{
              labels: labels,
              datasets: [
                {
                  label: "LTP",
                  data: ltps,
                  backgroundColor: ["rgb(130, 130, 243)"],
                  borderColor: ["rgb(130, 130, 243)"],
                },
              ],
            }}
          />

          <Bar
            width="800"
            height="700"
            options={{ responsive: false, maintainAspectRatio: false }}
            data={{
              labels: labels,
              datasets: [
                {
                  label: "Total Traded Quantities",
                  data: totalTurnover,
                  backgroundColor: ["rgb(130, 130, 243)"],
                  borderColor: ["rgb(130, 130, 243)"],
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MarketAnalysis;
