import * as React from "react";
import * as ReactDOM from "react-dom";
import "./stylesheets/style.scss";

const test = (): number => {
  console.log("My testtt");
  return 0;
};

const text = (str: string) => {
  return str;
};

ReactDOM.render(
  <button onClick={test}>{text("str")}</button>,
  document.getElementById("root"),
);
