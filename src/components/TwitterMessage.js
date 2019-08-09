import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    // console.log(props)
    this.state = {
      maxChars: props.maxChars,
      userInput: ""
    };
  }

  renderCharactersRemaining = (event) => {
    //
    this.setState ({
      userInput: event.target.value
    }, console.log(this.state))
    // console.log(event.target.value, 'should be called when user inputs something')
  }

  render() {
    // console.log(this.renderCharactersRemaining)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.userInput} maxChars={140} onChange={(event) => this.renderCharactersRemaining(event)}/>
        <p> You have {this.state.maxChars - this.state.userInput.length} characters remaining </p>
      </div>
    );
  }
}

export default TwitterMessage;
