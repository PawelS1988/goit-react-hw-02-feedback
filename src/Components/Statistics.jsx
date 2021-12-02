import React from "react";

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotalFeedback(good, neutral, bad)}</p>
      <p>
        Positive feedback: {countPositiveFeedbackPercentage(good, neutral, bad)}
        %
      </p>
    </div>
  );
};

export default Statistics;
