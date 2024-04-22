  const input = require("fs").readFileSync("/dev/stdin").toString().split(/ |\n/g);
  const a = Number(input.shift());
  const b = Number(input.shift());
  const num = Number(input.shift());

  const seats = new Array(b + 2);

  for (let i = 0; i < seats.length; i++) {
    seats[i] = new Array(a + 2).fill(0);
  }
  seats.forEach((_, i, arr) => {
    if (i === 0 || i === seats.length - 1) {
      arr[i].fill(-1);
    } else {
      arr[i][0] = -1;
      arr[i][arr[i].length - 1] = -1;
    }
  });

  const move = [
    [0, 1], // 아래
    [1, 0], // 왼쪽
    [0, -1], // 위
    [-1, 0], // 오른쪽
  ];

  const position = [1, 0];
  let person = 1;
  let isFinish = false;
  let isSeatable = false;

  while (!isFinish) {
    while (seats[position[1] + move[0][1]][position[0] + move[0][0]] === 0) {
      position[0] += move[0][0];
      position[1] += move[0][1];
      seats[position[1]][position[0]] = person;

      if (person === num) {
        isFinish = true;
        isSeatable = true;
        break;
      }
      person++;
    }
    if (isFinish) break;

    if (
      seats[position[1] + 1][position[0]] !== 0 &&
      seats[position[1] - 1][position[0]] !== 0 &&
      seats[position[1]][position[0] + 1] !== 0 &&
      seats[position[1]][position[0] - 1] !== 0
    ) {
      isFinish = true;
      break;
    }
    const newMove = move.shift();
    move.push(newMove);
  }
  if (isSeatable) {
    console.log(...position);
  } else {
    console.log(0);
  }