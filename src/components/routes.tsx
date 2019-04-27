import * as React from "react";
import { Sidebar } from "components/common/sidebar";
import { Route, Switch, Redirect } from "react-router";
import { Dashboard } from "components/dashboard/dashboard";
import { Workouts } from "components/workouts/workouts";
import { CreateWorkout } from "components/workouts/create_workouts";

export class Routes extends React.Component<{}> {
  public render() {
    return (
      <div className="fl fh">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/workouts" component={Workouts} />
          <Route exact path="/workouts/create" component={CreateWorkout} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
