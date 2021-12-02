import React from "react";

const FeedbackOptions = ({ addPoint }) => {
  return (
    <div>
      <button
        onClick={() => {
          addPoint("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          addPoint("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          addPoint("bad");
        }}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
