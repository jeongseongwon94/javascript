  const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

  const num = Number(input[0]);
  const student = input.slice(1);

  let studentArr = [];

  student.forEach((num, i) => {
    let arr = num.split(" ");
    studentArr[i] = [];

    for (let j = 0; j < arr.length; j++) {
      studentArr[i].push(Number(arr[j]));
    }
  });

  let sameClass = Array(num).fill(0);

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i === j) continue;
      for (let k = 0; k < 5; k++) {
        if (studentArr[i][k] === studentArr[j][k]) {
          sameClass[i]++;
          break;
        }
      }
    }
  }

  let max = Math.max(...sameClass);
  let leader = sameClass.indexOf(max) + 1;

  console.log(leader);