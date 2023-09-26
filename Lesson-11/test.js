const { pow } = require("./src/index.js");
const { expect } = require("chai");

describe("pow", () => {
  it("should return 1 when exponent is 0", () => {
    expect(pow(5, 0)).to.equal(1);
  });

  it("should return the base when exponent is 1", () => {
    expect(pow(5, 1)).to.equal(5);
  });

  it("should correctly calculate positive exponents", () => {
    expect(pow(2, 3)).to.equal(8);
  });

  it("should correctly calculate negative exponents", () => {
    expect(pow(2, -2)).to.equal(0.25);
  });

  it("should throw an error for non-number base or exponent", () => {
    expect(() => pow("a", 2)).to.throw(
      "Both base and exponent must be numbers"
    );
  });

  it("should throw an error for non-finite base or exponent", () => {
    expect(() => pow(Infinity, 2)).to.throw(
      "Both base and exponent must be finite numbers"
    );
  });

  it("should throw an error for non-integer exponents", () => {
    expect(() => pow(2, 1.5)).to.throw("Exponent must be an integer");
  });
});
