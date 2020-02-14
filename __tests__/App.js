import * as React from "react";
import { shallow } from "enzyme";

import { App } from "../src/App";

describe("<App/>", () => {
  it("should render without crashing", () => {
    shallow(<App />);
  });

  it("should render a span element", () => {
    const span = shallow(<App />).childAt(0);
    expect(span.text()).toEqual("This is some react app...");
  });
});
