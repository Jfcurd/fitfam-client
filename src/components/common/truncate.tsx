import * as React from 'react';

interface ITruncateProps {
  text: string;
  maxChars: number;
}

export class Truncate extends React.Component<ITruncateProps> {
  public render() {
    return (
      <span>
        {this.props.text.length > this.props.maxChars
          ? `${this.props.text.substr(0, this.props.maxChars)}…`
          : this.props.text
        }
      </span>
    );
  }
}