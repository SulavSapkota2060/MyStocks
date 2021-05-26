import React from "react";
import { useEffect, useState } from "react";
import "./table.css";

const Table = () => {
  const [tableData, changeTableData] = useState({
    header: ["S.N", "Symbol", "Quantity", "LTP", "Price", "Profit"],
    content: [
      ["1", "AKPL", "20000", "297", "2002", "2"],
      ["1", "AKPL", "20000", "297", "2002", "2"],
      ["1", "AKPL", "20000", "297", "2002", "2"],
    ],
  });
  return (
    <div className="table">
      <div className="header">
        <h1>MY PORTFOLIO</h1>
      </div>
      <table cellPadding="20" className="portfolio">
        <thead>
          <tr>
            {tableData.header.map((e) => (
              <th>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.content.map((x) => {
            return (
              <tr>
                {x.map((data) => (
                  <td>{data}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
