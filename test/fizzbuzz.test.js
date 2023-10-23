import Sinon from "sinon";
import { afterEach } from "mocha";
import Fizzbuzz from "../src/fizzbuzz.js";

describe("Fizzbuzz should", () => {
  Sinon.createSandbox();
  let consoleSpy = Sinon.spy(console, "log");

  afterEach(() => {
    consoleSpy.resetHistory();
  });

  it.skip("print out 100 lines", () => {});

  it.skip("prints out line number", () => {});

  it.skip("prints out 'Fizz' if line number is divisible by only three", () => {});

  it.skip("prints out 'Buzz' if line number is divisible by only five", () => {});

  it.skip("prints out 'FizzBuzz' if line number is divisible by three and five", () => {});

  it.skip("prints out 'Whizz' if line number is divisible by only seven", () => {});

  it.skip("prints out 'Bang' if line number is divisible by 11", () => {});

  it.skip("prints out 'FizzWhizz' if line number is divisible by 3 and 7", () => {});

  it.skip("prints out 'FizzBang' if line number is divisible by 3 and 11", () => {});

  it.skip("prints out 'BuzzWhizz' if line number is divisible by 5 and 7", () => {});

  it.skip("prints out 'WhizzBang' if line number is divisible by 7 and 11", () => {});

  it.skip("prints out lines until line number that is divisible by 3, 5, 7 and 11", () => {});
});
