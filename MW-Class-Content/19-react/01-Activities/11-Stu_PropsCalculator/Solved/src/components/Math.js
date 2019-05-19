import React from "react";

// The Math function component accepts a props argument
const Math = (props) => {
  let value;
  console.log(props);
  // Assign value based on the operator
  switch (props.operator) {
    case "+":
      value = props.num1 + props.num2;
      break;
    case "-":
      value = props.num1 - props.num2;
      break;
    case "*":
      value = props.num1 * props.num2;
      break;
    case "/":
      value = props.num1 / props.num2;
      break;
    default:
      value = NaN;
  }

  // Return a span element containing the calculated value
  // Set the fontSize to the value in pixels
  // Unlike a regular function, a component must always return a React element
  // Null or False are also acceptable return types which won't render anything
  return <span style={{ fontSize: value }}>{value}</span>;
};

export default Math;
