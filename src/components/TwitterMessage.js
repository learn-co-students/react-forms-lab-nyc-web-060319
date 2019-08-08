import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  hanldeChange = (event) => {
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message}  onChange={this.hanldeChange}name="message" id="message" />
        <p>Characters Remaining: {140 - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
