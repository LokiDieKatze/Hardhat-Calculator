const { expect } = require("chai");

describe("Calculator", function () {
  it("Should return correct result to the add operation", async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy();
    expect(await calculator.add(3, 2)).to.equal(5);
  });
  it("Should return correct result to the sub operation", async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy();
    expect(await calculator.sub(9, 2)).to.equal(7);
  });
  it("Should return correct result to the mul operation", async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy();
    expect(await calculator.mul(7, 3)).to.equal(21);
  });
  it("Should return correct result to the div operation", async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy();
    expect(await calculator.div(100, 10)).to.equal(10);
  });
  it("Should return correct result to the modulo operation", async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    const calculator = await Calculator.deploy();
    expect(await calculator.mod(58, 2)).to.equal(0);
  });
});
