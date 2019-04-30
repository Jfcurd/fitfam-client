import * as React from "react";
import { BasicLayout } from "components/common/basic_layout";
import { ExerciseCard } from "./exercise_card";
import './create_workout.scss';
import { IWorkout } from "src/api/models";
import Client from "../../api/client";

interface ICreateWorkoutState {
  workout: IWorkout;
}

export class CreateWorkout extends React.Component<{}, ICreateWorkoutState> {
  public async componentDidMount() {
    const workout = await Client.Workouts.createEmpty();
    workout.exercises = [];

    // TODO: State management (mobx? redux?)
    this.setState({ workout });
  }

  public render() {
    if (!(this.state && this.state.workout)) {
      return <div></div>;
    }
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
            {this.state.workout.exercises.map(exercise => (
              <ExerciseCard workoutExercise={exercise}></ExerciseCard>
            ))}
          </div>
          <div className="add-exercise" onClick={this.addExercise}>
            Add Exercise
          </div>
        </div>
      </BasicLayout>
    );
  }

  private readonly addExercise = () => {
    var w = { ...this.state.workout }
    w.exercises.push({});

    // TODO: State management (mobx? redux?)
    this.setState({ workout: w })
  }
}
