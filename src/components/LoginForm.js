import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  changeUsername = event => {
    this.setState({ username: event.target.value })
  }

  changePassword = event => {
    this.setState({ password: event.target.value })
  }

  submitted = event => {
    event.preventDefault()
    if (this.state.username != "" && this.state.password != "") {
      this.props.handleLogin()
    }
  }

  render() {
    return (
      <form onSubmit={this.submitted}>
        <div>
          <label>
            Username
            <input onChange={this.changeUsername} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.changePassword} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
