import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateForm = event => {
    this.setState({ message: event.target.value })
  }

  render() {
    return (
      <div>
        <strong>You have {this.props.maxChars - this.state.message.length} chars left.</strong>
        <input onChange={this.updateForm} type="text" name="message" id="message" value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
