function freeShipping(order) {
  let isFreeShip = false;
  let money = 0;
  for (const iterator in order) {
    money += parseFloat(order[iterator]);
  }
  if (money > 50) {
    isFreeShip = true;
  }
  return isFreeShip;
}

console.log(freeShipping({ 1: 2.3, 2: 35.4, 3: 42.2 }));
