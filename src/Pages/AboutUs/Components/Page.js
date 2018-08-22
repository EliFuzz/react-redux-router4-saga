import React from "react";

const Page = props => (
  <div>
    <h1>About {props.getTitle}</h1>
    <button onClick={props.fetchTitle}>Update</button>
  </div>
);

export default Page;
