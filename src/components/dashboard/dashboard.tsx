import * as React from "react";
import { BasicLayout } from "components/common/basic_layout";

export class Dashboard extends React.Component<{}> {
  public render() {
    return (
      <BasicLayout header="Dashboard">
        <div>This is where I'd put my Dashboard...</div>
        <div>IF I HAD ONE</div>
      </BasicLayout>
    );
  }
}
