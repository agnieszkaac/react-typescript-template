import React from "react";
import { hot } from "react-hot-loader/root";

import "./App.scss";

const App: React.FunctionComponent<{}> = ({}) => (
  <>
    <p>This is my ReactJS Typescript Webpack template.</p>
    <p>I used SCSS for style definitions.</p>
  </>
);

export default hot(App);
