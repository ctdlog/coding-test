const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let numInput = input[0].split(" ").map((item) => +item);
let n = numInput[0],
  m = numInput[1];

let arrInput = input[1].split(" ").map((item) => +item);

solution(arrInput);

function solution(arr) {
  // Write your code
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let tmp = arr[i];
    for (let j = i + 1; j <= n; j++) {
      tmp += arr[j];
      if (tmp == m) {
        cnt++;
        break;
      } else if (tmp > m) {
        break;
      }
    }
  }
  console.log(cnt);
}
