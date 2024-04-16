const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

  const a = input[0].split(" ").map(Number);
  const b = input[1].split(" ").map(Number);
  let result = [];

  a.forEach((num, index) => {
    if (num > b[index]) {
      result.push("A");
    }
    if (num < b[index]) {
      result.push("B");
    } else {
      result.push("D");
    }
  });
  score =
    result.filter((num) => "A" === num).length >
    result.filter((num) => "B" === num).length
      ? "A"
      : result.filter((num) => "A" === num).length <
        result.filter((num) => "B" === num).length
      ? "B"
      : "D";

  console.log(score);