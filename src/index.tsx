import * as React from "react";
import * as ReactDOM from "react-dom";

const test = (): number => {
  console.log("My test");
  return 0;
};

const text = (str: string) => {
  return str;
};

ReactDOM.render(
  <button onClick={test}>{text("str")}</button>,
  document.getElementById("root")
);