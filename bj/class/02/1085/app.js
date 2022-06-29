const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0].split(' ').map((item) => +item);

solution(input);

function solution(n) {
  // Write your code
  let x = n[0],
    y = n[1],
    w = n[2],
    h = n[3];

  let min = Math.min(x, y, w - x, h - y);

  console.log(min);
}
