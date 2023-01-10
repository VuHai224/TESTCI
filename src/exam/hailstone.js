function hailstone(number) {
  let sequence = [];
  sequence.push(number);
  while (number !== 1) {
    if (number % 2 === 0) {
      number = number / 2;
    } else {
      number = number * 3 + 1;
    }
    sequence.push(number);
  }
  return sequence;
}

console.log(hailstone(7));
