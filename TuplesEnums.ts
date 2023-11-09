// Tuples : TS에만 있음
// Tuples : array of fixed lengths and ordered with specific types - like super rigid arrays

const stuff: (string | number)[] = ["a", "b", 2];

// Tuples
const color: [number, number, number] = [1, 2, 3];
type HTTPResponse = [number, string];
const successRes: HTTPResponse = [200, "OK"];
const failRes: HTTPResponse = [404, "NOT FOUND"];

// successRes[0] = "200" >> 에러

// 튜플의 한계
// 변수에 값이 할당 된 후에 튜플 패턴에 맞지 않는 value가 push되기도 함..
successRes.push(123);
successRes.push(123);

const responses: HTTPResponse[] = [
  [404, "NOT FOUND"],
  [200, "OK"],
];

// Enums : set of named constants

enum OrderStatus {
  PENDING = 10,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.DELIVERED);

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 234,
}

// if move === ArrowKeys.LEFT; // >> "left"
