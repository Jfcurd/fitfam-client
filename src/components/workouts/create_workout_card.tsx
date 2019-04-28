import * as React from 'react';
import './create_workout_card.scss';

export class CreateWorkoutCard extends React.Component<{}> {
  public render() {
    return (
      <div className="create-workout-card">
        <div className="field">
          <div className="control">
            <div className="select">
              <select>
                <option>Squats</option>
                <option>Deadlifts</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}