import React from "react"
import "./BiometryBody.css"


export default class BiometryBody extends React.Component {

  handleButtonClick = (value) => {
    this.props.onButtonClick(value);
  };

  renderButton = (value) => {
    const { passwordValues } = this.props;
    const isActive = passwordValues.includes(value);
    const buttonClass = isActive ? "auth-button active" : "auth-button";
    return (
      <div className={buttonClass} key={value}>
        <button onClick={() => this.handleButtonClick(value)}>{value}</button>
      </div>
    );
  };

  render() {
    const buttons = [
      "A1", "A2", "A3", "A4", "A5", 
      "Б1", "Б2", "Б3", "Б4", "Б5", 
      "В1", "В2", "В3", "В4", "В5", 
      "Г1", "Г2", "Г3", "Г4", "Г5", 
      "Д1", "Д2", "Д3", "Д4", "Д5"
    ];
    return (
      <div className="biometry-spot__body">
        {buttons.map(this.renderButton)}
      </div>
    );
  }
} 