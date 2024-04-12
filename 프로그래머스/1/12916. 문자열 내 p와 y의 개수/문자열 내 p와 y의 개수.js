function solution(s) {
  const sArray = s.split("");
  let pNumber = 0;
  let yNumber = 0;

  sArray.forEach(function (i) {
    if (i === "p" || i === "P") {
      pNumber += 1;
    }
    if (i === "y" || i === "Y") {
      yNumber += 1;
    }
  });
  if (pNumber === yNumber) {
    return true;
  } else {
    return false;
  }
}