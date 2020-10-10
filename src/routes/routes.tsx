import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../components/layout/Dashboard";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Dashboard} />
      </BrowserRouter>
    </>
  );
}
