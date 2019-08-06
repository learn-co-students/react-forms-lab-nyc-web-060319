import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value: ""};
  }

  handleTyping(event) {
    // console.log(event.target);
    this.setState({value: event.target.value})
    // this.props.value = event.target.value;
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleTyping(event)} value={this.state.value} />
        {this.props.maxChars - this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
