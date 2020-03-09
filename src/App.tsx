import React from "react";
import { hot } from "react-hot-loader/root";

import "./stylesheets/style.scss";
import { Button } from "./common/Button";

const App: React.FunctionComponent<{}> = ({}) => (
  <>
    <span>Testu testu..</span>
    <Button label="MY button" />
  </>
);

export default hot(App);
