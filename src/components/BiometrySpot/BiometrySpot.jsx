import React from "react";
import "./BiometrySpot.css"

import BiometryBody from "../BiometryBody/BiometryBody";


export default class BiometrySpot extends React.Component {
  render() {
    return (
      <div className="biometry-spot">
        <div className="biometry-spot__header">
          <h4>Введите имя пользователя:</h4>
          <input
            type="text" placeholder="Ввод..."
            onChange={this.props.onInputChange} />
        </div>
        <BiometryBody
          onButtonClick={this.props.onButtonClick}
          passwordValues={this.props.passwordValues} />
      </div>
    )
  }
}