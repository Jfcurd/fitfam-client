import * as React from "react";
import { BasicLayout } from "components/common/basic_layout";
import { CreateWorkoutCard } from "./create_workout_card";

export class CreateWorkout extends React.Component<{}> {
  public render() {
    return (
      <BasicLayout header="Create Workout">
        <div className="container">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Enter Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Exercises</label>
            <CreateWorkoutCard></CreateWorkoutCard>
          </div>
        </div>
      </BasicLayout>
    );
  }
}
