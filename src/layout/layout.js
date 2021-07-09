import React, { Component } from "react";
import Dashboard from "../pages/dashboard/dashboard";
import Sidebar from "../components/sidebar/sidebar";
import Calculator from "../pages/calculator/calculator";
import MarketAnalysis from "../pages/marketAnalysis/marketAnalysis";
import { BrowserRouter, Route } from "react-router-dom";
import MyTradeData from "../pages/myTradeData/myTradeData";
import AddStockModal from "../components/addTradeModal/addTradeModal";

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="layout">
          <Sidebar />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/myTradeData" component={MyTradeData} />
          <Route exact path="/myTradeData/addStock" component={AddStockModal} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/marketAnalysis" component={MarketAnalysis} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;
