const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  // Write your code
  const [N, A, M, B] = input.map((v) => v.split(' '));

  const array = new Set(A);
  const result = B.map((v) => (array.has(v) ? 1 : 0));

  console.log(result.join('\n'));
}
