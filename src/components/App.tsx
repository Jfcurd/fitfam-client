import * as React from "react";
import "components/app.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "components/routes";
import { Sidebar } from "components/common/sidebar";

export class App extends React.Component<{}> {
  public render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="fl height-inherit">
            <Sidebar />
            <div className="grow">
              <Routes />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
