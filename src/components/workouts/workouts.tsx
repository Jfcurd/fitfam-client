import * as React from "react";
import { BasicLayout } from "components/common/basic_layout";
import { IWorkout } from "src/api/models";
import { WorkoutCard } from "./workout_card";

export class Workouts extends React.Component<{}> {
  private workouts: IWorkout[];

  constructor(public readonly props: {}) {
    super(props);

    this.workouts = [
      {
        id: 1,
        name: 'Test Workout 1',
        created_at: new Date(),
        exercises: [{ exercise: { name: 'Squats' } }, { exercise: { name: 'Deadlifts' } }],
      },
      {
        id: 2,
        name: 'Test Workout 2',
        created_at: new Date(),
        exercises: [{ exercise: { name: 'Bench press' } }, { exercise: { name: 'Dumbbell shoulder press' } }],
      },
      {
        id: 3,
        name: 'Test Workout 3',
        created_at: new Date(),
        exercises: [],
      },
      {
        id: 4,
        name: 'Test Workout 3',
        created_at: new Date(),
        exercises: [],
      },
      {
        id: 5,
        name: 'Test Workout 3',
        created_at: new Date(),
        exercises: [],
      },
    ];
  }

  public render() {
    return (
      <BasicLayout header="My Workouts">
        {this.workouts.map(workout => (
          <WorkoutCard workout={workout} key={workout.id} />
        ))}
        <WorkoutCard workout={null} empty={true} />
      </BasicLayout>
    );
  }
}
