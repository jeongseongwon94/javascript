const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

  const Max_num = input
    .join(" ")
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a)[0]
    .toString();

  let answer = [];

  input.forEach((num, index) => {
    const arr = num.split(" ");
    if (arr.indexOf(Max_num) >= 0) {
      answer = [index + 1, arr.indexOf(Max_num) + 1];
    }
  });

  console.log(Number(Max_num));
  console.log(answer[0], answer[1]);