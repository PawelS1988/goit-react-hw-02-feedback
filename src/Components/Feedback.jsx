import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

class Feedback extends React.Component {
  //MODEL
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //UPDATE
  addPoint = (stat) => {
    this.setState(() => {
      const newValue = {};
      newValue[stat] = this.state[stat] + 1;
      return { ...this.state, ...newValue };
    });
  };
  countTotalFeedback(good, neutral, bad) {
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage(good, neutral, bad) {
    return Math.round((good / (good + neutral + bad)) * 100);
  }
  //VIEW
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave a Feedback">
          <FeedbackOptions addPoint={this.addPoint} />
        </Section>
        <Section title="Statistics">
          {good + neutral + bad === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              {...this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          )}
        </Section>
      </>

      //<></> -  skrót do <React.Component></React.Component>
    );
  }
}

export default Feedback;
