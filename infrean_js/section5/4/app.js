const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

numInput = input[0].split(" ").map((item) => +item);
let n = numInput[0],
  m = numInput[1];
arrInput = input[1].split(" ").map((item) => +item);

console.log(n, m);

solution(arrInput);

function solution(arr) {
  // Write your code

  // let answer = 0,
  //   sum = 0,
  //   lt = 0;
  // for (let rt = 0; rt < arr.length; rt++) {
  //   sum += arr[rt];
  //   while (sum > m) {
  //     sum -= arr[lt++];
  //   }
  //   answer += rt - lt + 1;
  // }

  let cnt = 0;
  for (let i = 0; i <= n; i++) {
    let tmp = arr[i];
    for (let j = i + 1; j <= n; j++) {
      if (tmp <= m) {
        cnt++;
        console.log(tmp);
      }
      tmp += arr[j];
      if (tmp > m) break;
    }
  }
  console.log(cnt);
}
