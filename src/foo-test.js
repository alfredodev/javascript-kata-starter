require('should');
const sum = require('./foo.js');

describe("Foo", () => {
  it("Bar", () => {
    sum(1, 5).should.eql(6);
  });
});