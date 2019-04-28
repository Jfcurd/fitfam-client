import * as React from "react";
import "components/common/sidebar.scss";
import { Link } from "react-router-dom";

export class Sidebar extends React.Component<{}> {
  public render() {
    return (
      <aside className="menu sidebar">
        <p className="menu-label is-size-2 sidebar-head p1">
          FitFam
        </p>
        <ul className="menu-list">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/workouts">My Workouts</Link>
          </li>
          <li>
            <Link to="/workouts/create">Create Workouts</Link>
          </li>
        </ul>
      </aside>
    );
  }
}
