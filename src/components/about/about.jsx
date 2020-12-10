import React, { Component } from "react";

class About extends Component {
  state = {
    isEmailVisible: false,
  };

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Sergio Inzunza</h1>
        <p>
          Please send an email and we can chat about any project you have in
          mind
        </p>

        {this.getEmailText()}

        <button
          onClick={this.handleBtnClick}
          className="btn btn-primary btn-lg"
        >
          Show email
        </button>
      </div>
    );
  }

  handleBtnClick = () => {
    this.setState({ isEmailVisible: true });

    setTimeout(() => {
      this.setState({ isEmailVisible: false });
    }, 30000);
  };

  getEmailText = () => {
    if (this.state.isEmailVisible) {
      return (
        <h6>
          <a href="mailto:contact@sinzunza.com">contact@sizunza.com</a>
        </h6>
      );
    } else {
      return <h6>Click on the button to see my email</h6>;
    }
  };
}

export default About;

/*
1) CATCH CLICK EVENT on the btn and update the state

2) in getEmailText verify if the state flag is true, return email otherwise return the message.
*/
