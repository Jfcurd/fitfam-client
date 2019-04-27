import * as React from "react";
import { BasicLayout } from "components/common/basic_layout";

export class Dashboard extends React.Component<{}> {
  public render() {
    return (
      <BasicLayout header="Dashboard">
        Children here
      </BasicLayout>
    );
  }
}
