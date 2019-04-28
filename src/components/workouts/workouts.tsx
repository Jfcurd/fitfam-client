import * as React from "react";
import { BasicLayout } from "components/common/basic_layout";

export class Workouts extends React.Component<{}> {
  public render() {
    return (
      <BasicLayout header="My Workouts">
        Children here
      </BasicLayout>
    );
  }
}
