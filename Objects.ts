// Object literal Parameters
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({
  first: "LEE",
  last: "HYE LEE",
});

// Object literal may only specify known properties, and 'age' does not exist in type '{ first: string; last: string; }
// printName({
//   first: "LEE",
//   last: "HYE LEE",
//   age: 30,
// });

const lee = { first: "LEE", last: "HYE LEE", age: 30 };
printName(lee);

// obejct literal 형태로 파라미터 넘기면 문제 생김..

// readonly
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 124,
  username: "catgurl",
};

// user.id = 2222; >> 불가능
