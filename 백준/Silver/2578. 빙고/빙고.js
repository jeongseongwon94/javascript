  const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

  const bingo = input.slice(0, 5);
  const answer = input.slice(5);

  let bingoArr = [];
  let answerArr = [];

  bingo.forEach((num, i) => {
    let arr = num.split(" ");
    bingoArr[i] = [];

    for (let j = 0; j < arr.length; j++) {
      bingoArr[i].push(Number(arr[j]));
    }
  });

  answer.forEach((num, i) => {
    let arr = num.split(" ");
    for (let j = 0; j < arr.length; j++) {
      answerArr.push(Number(arr[j]));
    }
  });

  function position(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === num) {
          return [i, j];
        }
      }
    }
  }

  function checkBingo(arr) {
    let count = 0;
    // 가로줄 검사
    for (let i = 0; i < 5; i++) {
      if (arr[i].every((v) => v === 0)) count++;
    }
    // 세로줄 검사
    for (let i = 0; i < 5; i++) {
      if (arr.every((v) => v[i] === 0)) count++;
    }
    // 대각선 검사
    if (
      arr[0][0] === 0 &&
      arr[1][1] === 0 &&
      arr[2][2] === 0 &&
      arr[3][3] === 0 &&
      arr[4][4] === 0
    )
      count++;
    if (
      arr[0][4] === 0 &&
      arr[1][3] === 0 &&
      arr[2][2] === 0 &&
      arr[3][1] === 0 &&
      arr[4][0] === 0
    )
      count++;

    return count >= 3;
  }

  for (let i = 0; i < answerArr.length; i++) {
    let [x, y] = position(bingoArr, answerArr[i]);
    bingoArr[x][y] = 0;
    if (checkBingo(bingoArr)) {
      console.log(i + 1);
      break;
    }
  }