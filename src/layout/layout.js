import React, { Component } from "react";
import Dashboard from "../pages/dashboard/dashboard";
import Sidebar from "../components/sidebar/sidebar";
import Calculator from "../pages/calculator/calculator";
import { BrowserRouter, Route } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="layout">
          <Sidebar />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/calculator" component={Calculator} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;
