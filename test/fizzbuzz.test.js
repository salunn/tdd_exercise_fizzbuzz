import Sinon from "sinon";
import { afterEach } from "mocha";
import Fizzbuzz from "../src/fizzbuzz.js";

describe("Fizzbuzz should", () => {
  Sinon.createSandbox();
  let consoleSpy = Sinon.spy(console, "log");

  afterEach(() => {
    consoleSpy.resetHistory();
  });

  it("print out 100 lines", () => {
    Fizzbuzz();

    Sinon.assert.callCount(consoleSpy, 100);
  });

  it("prints out line number", () => {
    Fizzbuzz();

    for (let i = 0; i < 100; i++) {
      if (
        (i + 1) % 3 !== 0 &&
        (i + 1) % 5 !== 0 &&
        (i + 1) % 7 !== 0 &&
        (i + 1) % 11 !== 0
      ) {
        Sinon.assert.calledWith(consoleSpy.getCall(i), i + 1);
      }
    }
  });

  it("prints out 'Fizz' if line number is divisible by only three", () => {
    const linesExpectedToBeFizz = Array(100)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((i) => i % 3 === 0)
      .filter((i) => i % 5 !== 0)
      .filter((i) => i % 7 !== 0)
      .filter((i) => i % 11 !== 0);
    Fizzbuzz();

    linesExpectedToBeFizz.forEach((lineVal) => {
      Sinon.assert.calledWith(consoleSpy.getCall(lineVal - 1), "Fizz");
    });
  });

  it("prints out 'Buzz' if line number is divisible by only five", () => {
    const linesExpectedToBeBuzz = Array(100)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((i) => i % 5 === 0)
      .filter((i) => i % 3 !== 0)
      .filter((i) => i % 7 !== 0)
      .filter((i) => i % 11 !== 0);
    Fizzbuzz();

    linesExpectedToBeBuzz.forEach((lineVal) => {
      Sinon.assert.calledWith(consoleSpy.getCall(lineVal - 1), "Buzz");
    });
  });

  it("prints out 'FizzBuzz' if line number is divisible by three and five", () => {
    const linesExpectedToBeFizzBuzz = Array(100)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((i) => i % 5 === 0)
      .filter((i) => i % 3 === 0)
      .filter((i) => i % 11 !== 0);
    Fizzbuzz();

    linesExpectedToBeFizzBuzz.forEach((lineVal) => {
      Sinon.assert.calledWith(consoleSpy.getCall(lineVal - 1), "FizzBuzz");
    });
  });

  it("prints out 'Whizz' if line number is divisible by only seven", () => {
    const linesExpectedToBeWhizz = Array(100)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((i) => i % 7 === 0)
      .filter((i) => i % 3 !== 0)
      .filter((i) => i % 5 !== 0)
      .filter((i) => i % 11 !== 0);

    Fizzbuzz();

    linesExpectedToBeWhizz.forEach((lineVal) => {
      Sinon.assert.calledWith(consoleSpy.getCall(lineVal - 1), "Whizz");
    });
  });

  it("prints out 'Bang' if line number is divisible by 11", () => {
    const linesExpectedToBeBang = Array(100)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((i) => i % 11 === 0)
      .filter((i) => i % 3 !== 0)
      .filter((i) => i % 5 !== 0)
      .filter((i) => i % 7 !== 0);

    Fizzbuzz();

    linesExpectedToBeBang.forEach((lineVal) => {
      Sinon.assert.calledWith(consoleSpy.getCall(lineVal - 1), "Bang");
    });
  });

  it("prints out 'FizzWhizz' if line number is divisible by 3 and 7", () => {
    const linesExpectedToBeFizzWhizz = Array(100)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((i) => i % 3 === 0)
      .filter((i) => i % 7 === 0)
      .filter((i) => i % 5 !== 0)
      .filter((i) => i % 11 !== 0);

    Fizzbuzz();

    linesExpectedToBeFizzWhizz.forEach((lineVal) => {
      Sinon.assert.calledWith(consoleSpy.getCall(lineVal - 1), "FizzWhizz");
    });
  });

  it("prints out 'FizzBang' if line number is divisible by 3 and 11", () => {
    const linesExpectedToBeFizzBang = Array(100)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((i) => i % 3 === 0)
      .filter((i) => i % 11 === 0)
      .filter((i) => i % 5 !== 0)
      .filter((i) => i % 7 !== 0);

    Fizzbuzz();

    linesExpectedToBeFizzBang.forEach((lineVal) => {
      Sinon.assert.calledWith(consoleSpy.getCall(lineVal - 1), "FizzBang");
    });
  });

  it("prints out 'BuzzWhizz' if line number is divisible by 5 and 7", () => {
    const linesExpectedToBeBuzzWhizz = Array(100)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((i) => i % 5 === 0)
      .filter((i) => i % 7 === 0)
      .filter((i) => i % 3 !== 0)
      .filter((i) => i % 11 !== 0);

    Fizzbuzz();

    linesExpectedToBeBuzzWhizz.forEach((lineVal) => {
      Sinon.assert.calledWith(consoleSpy.getCall(lineVal - 1), "BuzzWhizz");
    });
  });

  it("prints out 'WhizzBang' if line number is divisible by 7 and 11", () => {
    const linesExpectedToBeWhizzBang = Array(100)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((i) => i % 7 === 0)
      .filter((i) => i % 11 === 0)
      .filter((i) => i % 3 !== 0)
      .filter((i) => i % 5 !== 0);

    Fizzbuzz();

    linesExpectedToBeWhizzBang.forEach((lineVal) => {
      Sinon.assert.calledWith(consoleSpy.getCall(lineVal - 1), "WhizzBang");
    });
  });

  it("prints out lines until line number that is divisible by 3, 5, 7 and 11", () => {
    Fizzbuzz();

    Sinon.assert.calledWithExactly(consoleSpy, "FizzBuzzWhizzBang");
  });
});
