import * as React from 'react';
import * as classnames from 'classnames';
import { IWorkout } from 'src/api/models';
import './workout_card.scss';
import { Truncate } from 'components/common/truncate';
import { Link } from 'react-router-dom';

interface IWorkoutCardProps {
  workout: IWorkout;
  empty?: boolean;
}

export class WorkoutCard extends React.Component<IWorkoutCardProps> {
  public render() {
    if (this.props.empty) {
      return this.emptyCard();
    }

    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className={classnames("title", "is-4", !this.props.workout.name && "is-italic")}>{this.props.workout.name || 'No name!'}</p>
              <p className="subtitle is-6">
                <time>{this.props.workout.createdAt.toLocaleString()}</time>
              </p>
            </div>
          </div>
          <div className="content">
            {<span className="is-italic">
              {this.props.workout.exercises && this.props.workout.exercises.length > 0
                ? <Truncate text={this.props.workout.exercises.map(e => e.exercise.name).join(', ')} maxChars={150} />
                : 'No exercises!'
              }
            </span>}
          </div>
        </div>
      </div>
    );
  }

  private emptyCard() {
    return (
      <Link to="/workouts/create" className="card is-empty">
        <div className="card-content">
          <div className="content is-size-3">
            +
          </div>
        </div>
      </Link>
    );
  }
}