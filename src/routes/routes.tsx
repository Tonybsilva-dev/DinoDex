import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Album from "../components/layout/Album";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Album} />
      </BrowserRouter>
    </>
  );
}
