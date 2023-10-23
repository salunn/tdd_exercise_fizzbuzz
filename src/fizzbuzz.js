function lineBuilder(lineNum) {
  let lineWord = "";

  if (lineNum % 3 === 0) {
    lineWord += "Fizz";
  }
  if (lineNum % 5 === 0) {
    lineWord += "Buzz";
  }
  if (lineNum % 7 === 0) {
    lineWord += "Whizz";
  }
  if (lineNum % 11 === 0) {
    lineWord += "Bang";
  }
  if (
    lineNum % 5 !== 0 &&
    lineNum % 3 !== 0 &&
    lineNum % 7 !== 0 &&
    lineNum % 11 !== 0
  ) {
    lineWord = lineNum;
  }

  return lineWord;
}

export default function Fizzbuzz() {
  let lineWord = "";
  let lineNum = 0;
  while (lineWord !== "FizzBuzzWhizzBang") {
    lineNum++;
    lineWord = lineBuilder(lineNum);
    console.log(lineWord);
  }
}
