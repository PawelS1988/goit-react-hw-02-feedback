import React from "react";

const Section = (props) => {
  console.log(props);
  return (
    <section>
      <h1>{props.title}</h1>
      {props.children}
    </section>
  );
};

export default Section;
