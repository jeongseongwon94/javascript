const input = require("fs").readFileSync("/dev/stdin").toString().split(/ |\n/g);

  const Max_num = Math.max(...input.map(Number));
  const newInput = input.map((line) => line.replace("\r", ""));
  let result = [];
  let answer = [];
  while (newInput.length) result.push(newInput.splice(0, 9));

  result.forEach((num, index) => {
    if (num.indexOf(Max_num.toString()) >= 0) {
      answer = [index + 1, num.indexOf(Max_num.toString()) + 1];
    }
  });

  console.log(Number(Max_num));
  console.log(answer[0], answer[1]);