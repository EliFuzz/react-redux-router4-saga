import React from "react";

const Page = props => (
  <div>
    <h2>{props.getCounter}</h2>
    <button onClick={props.decrement}>-</button>
    <button onClick={props.reset}>=</button>
    <button onClick={props.increment}>+</button>
  </div>
);

export default Page;
