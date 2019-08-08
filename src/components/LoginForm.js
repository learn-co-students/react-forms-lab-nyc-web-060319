import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(event) => {
          event.preventDefault()
          if (this.state.username.length > 0 && this.state.password.length > 0){
            this.props.handleLogin(this.state.username, this.state.password)
          }
          }}>
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={this.handleChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={this.handleChange} id="password" name="password" type="password" />
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
