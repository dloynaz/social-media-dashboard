import React from 'react';
import './lightMode.css';

export class Lightmode extends React.Component {
  constructor(props) {
    super(props)
    this.onMode = this.onMode.bind(this);
    this.state = { Mode: "Light" }
  }


  onMode() {
      if (this.state.Mode === "Light") {
        this.setState({ Mode: "Dark" });
        document.documentElement.style.setProperty("--round", "-48px");
        document.documentElement.style.setProperty("--roundColor", "MidnightBlue");
      } else {
        this.setState({ Mode: "Light" });
        document.documentElement.style.setProperty("--round", "-19px");
        document.documentElement.style.setProperty("--roundColor", "Azure");
      }
 
    return this.props.onMode(this.state.Mode);
  }

  render() {
    return (
      <div className="container" onClick={this.onMode}>
        <h6>{this.state.Mode} Mode</h6>
        <div className="round"><h1>round</h1></div>
        <div className="bar"><h1>bar</h1></div>
      </div>
    )
  }
}

