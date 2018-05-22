import "mocha";
import { expect } from "chai";

import hello from "./index";

describe("testing setup# this test specs should pass always", () => {
  it("should pass", () => {
    expect("foo").to.not.equal("bar");
  });

  it("should error", () => {
    expect(() => {
      throw new Error();
    }).to.throw();
  });
});

describe("Hello function# this test specs should pass always", () => {
  it("should return hello world", () => {
    const result = hello();
    expect(result).to.equal("Hello World!");
  });
});
