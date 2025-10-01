const Prod = (props) => {
  const msg = <h1>Welcome to the page!</h1>;

  var y = 10;
  for (let i = 1; i <= 5; i++) {
    var x = 20;
    console.log(i);
    console.log(y);
  }
  console.log(x);

  const vehicle = ["Ford", "F-150", "Jeep"];
  const [car, truck, Jeep] = vehicle;

  console.log(car);
  console.log();

  const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "Car",
    year: 2012,
    color: "red",
  };
  function myVehicle({ model, color, year }) {
    const message = `My ${model} is in ${color} color which is produced in ${year}.`;
    console.log(message);
  }
  myVehicle(vehicleOne);
  return <div>{msg}</div>;
};

function calculate(a, b) {
  const sum = a + b;
  const divide = a / b;
  const multiply = a * b;
  const subtract = a - b;
  return { sum, divide, multiply, subtract };
}
const t = calculate(7, 8);
console.log(t);

const fruits = ["apple", "banana", "mango"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit);

const user = { name: "Ali", age: 25 };
const { age, name } = user;
console.log(age);

const numbers = [1, 2, 3, 4, 5];
const [first, , third, ,] = numbers;
console.log(first);
console.log(third);

const [a = 1, b = 2, c = 3] = [10];
console.log(a, b, c);

const person = { fname: "Sara", lname: "Khan" };
[person.fname, person.lname] = [person.lname, person.fname];
console.log(person.fname + " " + person.lname);

const student = {
  name: "Ahmed",
  marks: {
    math: 90,
    english: 85,
  },
};

const { math, english } = student.marks;
console.log(math);

const colors = ["red", ["green", "blue"], "yellow"];

const [green, blue] = colors[1];
console.log(blue);
console.log(green);

function display({ name, age }) {
  console.log(name, age);
}

const customer = { name: "Zara", age: 22 };
// Call display() to print Zara and 22
display(customer);

const number = [1, 2, 3, 4, 5];
// Get first two elements separately, rest in another variable
const [fir, sec, ...rest] = number;
console.log(fir);
console.log(sec);
console.log(...rest);

const people = [
  { name: "Ali", age: 30 },
  { name: "Sara", age: 25 },
];
for (let prop of people) {
  console.log(prop);
}

function getCoords() {
  return { x: 10, y: 20 };
}
let { x, y } = getCoords();
console.log(x);

function initApp({ user: { name, role }, theme = "light", language = "en" }) {
  console.log(name, role, theme, language);
}

const settings = {
  user: { name: "Hassan", role: "admin" },
  language: "ur",
};

// Call initApp with settings
const called = initApp(settings);
console.log(called);

const data = [
  { id: 1, value: "A" },
  { id: 2, value: "B" },
];

// Use .map() with destructuring to return array of only values

const des = data.map((item) => item.value);
console.log(des);

const profile = {
  info: {
    contact: {
      email: "test@example.com",
    },
  },
};

// Destructure email safely with optional chaining

const result = profile?.info?.contact?.email;
console.log(result);

const num = [1, 2, 3, 4];
const res = num.map((i) => i * 2);
console.log(res);

const words = ["hello", "world"];
const upper = words.map(
  (words) => words.charAt(0).toUpperCase() + words.slice(1)
);
console.log(upper);

const fruit = ["apple", "banana", "cherry", "banana"];
const fruitWithCherryIndex = fruit.map((item) =>
  item === "cherry" ? item + "+10" : item
);
console.log(fruitWithCherryIndex);


// const secFilterFruit =  filterFruit.map(fruit => fruit);
// console.log(filterFruit);
// console.log(secFilterFruit);
// console.log(extract);

const nums = [5, 10, 15];
const filterNums = nums.map((nums) => nums + 10);
console.log(filterNums);

const value = [1, 2, 3];
const filterValue = value.map((value) => "Number: " + value.toString());
console.log(filterValue);

const users = [
  { id: 1, name: "Ali" },
  {
    id: 2,
    name: "Sara",
  },
];

const filteredName = users.map((user) => user.name);
console.log(filteredName);

const values = [0, 1, -2, 5];
const tf = values.map((value) => (value === 0 ? "false" : "true"));
console.log(tf);



const letters = ["a", "b", "c"];
const letr = letters.map((letter, index, arr) => `${index}:${letter}`);
console.log(letr);

export default Prod;
