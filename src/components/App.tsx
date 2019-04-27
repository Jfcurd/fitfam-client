import * as React from "react";
import "components/app.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "components/routes";

export class App extends React.Component<{}> {
  public render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}
