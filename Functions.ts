// 1. Function with default parameters
function greet(name: string = "stranger") {
  return `Hi there, ${name}!`;
}

// 2. Never types
// 예외만을 처리하거나 무한 루프하는 function의 반환 타입을 never로 지정 가능
// void 와는 다름. void의 경우에는 반환 값이 null 또는 undefined로 value가 될 수 있음
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop() {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}
