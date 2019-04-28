import * as React from "react";
import "./layout.scss";

interface IBasicLayoutProps {
  header: string;
}

export class BasicLayout extends React.Component<IBasicLayoutProps> {
  public render() {
    return (
      <div>
        <div className="layout-header p1 ds-bottom">
          <h1 className="title is-2 pl1">
            {this.props.header}
          </h1>
        </div>

        <div className="p1">
          {this.props.children}
        </div>
      </div>
    );
  }
}
