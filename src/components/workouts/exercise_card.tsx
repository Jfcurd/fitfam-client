import * as React from 'react';
import './exercise_card.scss';
import { IWorkoutExercise } from 'src/api/models';

interface IExerciseCardProps {
  workoutExercise: IWorkoutExercise;
}

export class ExerciseCard extends React.Component<IExerciseCardProps> {
  public render() {
    return (
      <div className="create-workout-card">
        <div className="field card-section">
          <div className="control">
            <div className="select">
              <select>
                <option>Squats</option>
                <option>Deadlifts</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-section">
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded">
                  <input className="input" type="number" placeholder="Reps" />
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded">
                  <input className="input" type="number" placeholder="Weight" />
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded">
                  <input className="input" type="text" placeholder="Notes" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="add-set">
          +
        </div>
      </div>
    );
  }
}