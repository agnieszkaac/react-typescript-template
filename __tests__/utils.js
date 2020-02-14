import { sum } from "../src/utils";

describe("utils", () => {
  it("sum function should add", () => {
    expect(sum(1, 3)).toBe(4);
  });
});
