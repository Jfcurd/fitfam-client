import * as React from "react";
import Client from "../../api/client";
import { BasicLayout } from "components/common/basic_layout";
import { IWorkout } from "src/api/models";
import { WorkoutCard } from "components/workouts/workout_card";

interface IWorkoutsState {
  workouts: IWorkout[];
}
export class Workouts extends React.Component<{}, IWorkoutsState> {
  public async componentDidMount() {
    const workouts = await Client.Workouts.get();

    // TODO: State management (mobx? redux?)
    this.setState({ workouts });
  }

  public render() {
    if (!(this.state && this.state.workouts)) {
      return <div></div>
    }

    return (
      <BasicLayout header="My Workouts">
        {this.state.workouts && this.state.workouts.map(workout => (
          <WorkoutCard workout={workout} key={workout.id} />
        ))}
        <WorkoutCard workout={null} empty={true} />
      </BasicLayout>
    );
  }
}
