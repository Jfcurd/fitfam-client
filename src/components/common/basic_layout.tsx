import * as React from "react";

interface IBasicLayoutProps {
  header: string;
}

export class BasicLayout extends React.Component<IBasicLayoutProps> {
  public render() {
    return (
      <div className="page-content">

        <section className="section">
          <div className="container">
            <h1 className="title">{this.props.header}</h1>
            <h2 className="subtitle">A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</h2>
          </div>
        </section>

        <section className="section">
          {this.props.children}
        </section>
      </div>
    );
  }
}
