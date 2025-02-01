const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const divideThree = n.filter((num) => num % 3 === 0).map((num) => Math.pow(num, 3));
console.log(divideThree);