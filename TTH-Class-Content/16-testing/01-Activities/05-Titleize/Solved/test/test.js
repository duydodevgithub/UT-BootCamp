"use strict";

var expect = require("chai").expect;
var titleize = require("../titleize");

describe("Titleize", function() {
  it("to capitalize initial letter of each word in input", function() {
    expect(titleize("seth godin")).to.equal("Seth Godin");
  });

  it("to append period to leading titles", function() {
    expect(titleize("dr zhivago")).to.equal("Dr. Zhivago");
  });

  it("to not change properly cased strings", function() {
    expect(titleize("Mr. Alexander Pushkin")).to.equal("Mr. Alexander Pushkin");
  });

  it("to add periods to properly capitalized titles", function() {
    expect(titleize("Mr Alexander Pushkin")).to.equal("Mr. Alexander Pushkin");
  });

  it("to properly case mixed case strings", function() {
    expect(titleize("Mr AlEXANDER PushKIn")).to.equal("Mr. Alexander Pushkin");
  });
});
