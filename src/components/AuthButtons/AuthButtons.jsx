import React from "react"
import "./AuthButton.css"


export default class AuthButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="auth-buttons">
        <button onClick={this.props.onRegister}>Регистрация</button>
        <button onClick={this.props.onLogin}>Авторизация</button>
      </div>
    )
  }
}