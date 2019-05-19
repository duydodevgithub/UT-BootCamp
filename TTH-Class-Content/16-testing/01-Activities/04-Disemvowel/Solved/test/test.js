"use strict";

const expect = require("chai").expect;
const disemvowel = require("../disemvowel");

describe("Disemvowel", () => {
  it("should remove all vowels from lowercase strings", () => {
    expect(disemvowel("this is lowcase")).to.equal("ths s lwcs");
  });

  it("should remove all vowels from upcase strings", () => {
    expect(disemvowel("THIS US UPCASE")).to.equal("THS S PCS");
  });

  it("should remove all vowels from mixed strings", () => {
    expect(disemvowel("this IS mixed")).to.equal("ths S mxd");
  });

  it("should ignore numbers in input strings", () => {
    expect(disemvowel("this IS mixed and has 2 NUMBERS 92")).to.equal(
      "ths S mxd nd hs 2 NMBRS 92"
    );
  });

  it("should cast numbers to strings", () => {
    expect(disemvowel(10971)).to.equal("10971");
  });
});
