import React from "react";

//MODEL
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //UPDATE
  addPoint(stat) {
    this.setState(() => {
      const newValue = {};
      newValue[stat] = this.state[stat] + 1;
      return { ...this.state, ...newValue };
    });
  }
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }
  //VIEW
  render() {
    return (
      <>
        <h1>Please leave a Feedback</h1>
        <button
          onClick={() => {
            this.addPoint("good");
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
            this.addPoint("neutral");
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            this.addPoint("bad");
          }}
        >
          Bad
        </button>
        <h1>Statistics</h1>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </>

      //<></> -  skrót do <React.Component></React.Component>
    );
  }
}

export default Feedback;
