import React from "react";
import "./App.css"

import AuthButtons from "../components/AuthButtons/AuthButtons";
import BiometrySpot from "../components/BiometrySpot/BiometrySpot";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordValues: [],
      users: {}, // Хранение пользователей и их паролей
      currentUser: "", // Имя текущего пользователя
      isAuthenticated: false // Статус авторизации
    };
  }

  handleButtonClick = (value) => {
    this.setState((prevState) => {
      const newArray = prevState.passwordValues.includes(value)
        ? prevState.passwordValues.filter(v => v !== value)
        : [...prevState.passwordValues, value];
      return { passwordValues: newArray };
    });
  };

  handleInputChange = (event) => {
    this.setState({ currentUser: event.target.value });
  };

  handleRegister = () => {
    const { currentUser, passwordValues, users } = this.state;
    if (currentUser && passwordValues.length > 0) {
      if (users[currentUser]) {
        alert("Пользователь с таким именем уже существует.");
        return;
      }

      this.setState({
        users: { ...users, [currentUser]: passwordValues },
        passwordValues: []
      }, () => {
        alert("Регистрация успешна!");
      });
    } else {
      alert("Введите имя пользователя и выберите биометрические данные.");
    }
  };

  handleLogin = () => {
    const { currentUser, passwordValues, users } = this.state;
    if (users[currentUser] && JSON.stringify(users[currentUser]) === JSON.stringify(passwordValues)) {
      this.setState({ isAuthenticated: true, passwordValues: [] }, () => {
        alert("Авторизация успешна!");
      });
    } else {
      alert("Неверное имя пользователя или биометрические данные.");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="biometry-card">
          <div className="card-header">
            <h3>Биометрическая аутентификация</h3>
          </div>
          <div className="card-body">
            <BiometrySpot
              onButtonClick={this.handleButtonClick}
              passwordValues={this.state.passwordValues}
              onInputChange={this.handleInputChange} />
            <AuthButtons
              onRegister={this.handleRegister}
              onLogin={this.handleLogin} />
          </div>
        </div>
      </div>
    )
  }
}