import * as React from 'react';
import { Navbar } from './common/navbar';

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='app'>
        <Navbar />
      </div>
    );
  }
}
