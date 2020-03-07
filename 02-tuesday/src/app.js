const _ = {};

_.myMap = function(list, callback) {
  if (Array.isArray(list)) {
    let arr = [];
    for (let item of list) {
      arr.push(callback(item));
    }
    return arr;
  }
};

_.myFilter = function(list, callback) {
  if (Array.isArray(list)) {
    let arr = [];
    for (let item of list) {
      if (callback(item)) {
        arr.push(item);
      }
    }
    return arr;
  }
};

function customIncludes(str) {
  return str.includes("a");
}

function customReverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

// 1)

// a) Using the filter method:

let namesContainsA = names.filter(name => name.includes("a"));
console.log("Opgave 1, a:", namesContainsA);

// b) Using the map method:

let namesReversed = names.map(name =>
  name
    .split("")
    .reverse()
    .join("")
);
console.log("Opgave 1, b:", namesReversed);

// ###################################################################################################################################################

// 2)

// a) Implement a function: myFilter
let namesContainsACustom = _.myFilter(names, customIncludes);
console.log("Opgave 2, a:", namesContainsACustom);

// b) Implement a function: myMap

let namesReversedCustom = _.myMap(names, customReverse);
console.log("Opgave 2, b:", namesReversedCustom);

// ###################################################################################################################################################
// 3)

// a)

Array.prototype.myFilter = function(callback) {
  if (Array.isArray(this)) {
    let arr = [];
    for (let item of this) {
      if (callback(item)) {
        arr.push(item);
      }
    }
    return arr;
  }
};

let namesContainsAProto = names.myFilter(customIncludes);
console.log("Opgave 3, a:", namesContainsAProto);

// b)

Array.prototype.myMap = function(callback) {
  if (Array.isArray(this)) {
    let arr = [];
    for (let item of this) {
      arr.push(callback(item));
    }
    return arr;
  }
};

let namesReversedProto = names.myMap(customReverse);
console.log("Opgave 3, b:", namesReversedProto);

// ###################################################################################################################################################

// 4)

// a)
{
  let numbers = [1, 3, 5, 10, 11];

  let result = numbers.map((number, index) => {
    return numbers[index + 1] ? number + numbers[index + 1] : number;
  });
  console.log("Opgave 4, a:", result);
}
// b)
//names ["Lars", "Jan", "Peter", "Bo", "Frederik"];
{
  let result = `<nav> ${names
    .map(name => `<a href="">${name}</a>`)
    .join(", ")} </nav>`;
  console.log(result);
  linksDiv = document.querySelector("#links");
  linksDiv.innerHTML = result;
}

// c)
const printTableFromArray = array => {
  const table = `
  <table>
    <tr>
    ${Object.keys(array[0])
      .map(
        key => `
      <th>${key}</th>
    `
      )
      .join("")}
    </tr>
    ${array
      .map(
        value => `
      <tr>
      ${Object.values(value)
        .map(
          propValue => `
      <td> ${propValue} </td>
      `
        )
        .join("")}
      </tr>`
      )
      .join("")}
  </table>`;
  return table;
};
let namesWithPhones = [
  { name: "Lars", phone: "1234567" },
  { name: "Peter", phone: "675843" },
  { name: "Jan", phone: "98547" },
  { name: "Bo", phone: "79345" }
];
{
  let result = printTableFromArray(namesWithPhones);
  console.log(result);
  tableDiv = document.querySelector("#table");
  tableDiv.innerHTML = result;
}

// d)
// used variable hoisting see implementation in block scopes
var linksDiv;
var tableDiv;

// e)
function customFilter(e) {
  tableDiv.innerHTML = printTableFromArray(
    namesWithPhones.filter(({ name }) => name.includes("a"))
  );
}
const filterByABtn = document.querySelector("#filterByABtn");

filterByABtn.addEventListener("click", customFilter);

// ###################################################################################################################################################
// 5)
// a)
var all = ["Lars", "Peter", "Jan", "Bo"];
var comma = all.join(", ");
console.log(comma);
var space = all.join(" ");
console.log(space);
var pound = all.join("#");
console.log(pound);

// b)
var numbers = [2, 3, 67, 33];
const additionReducer = (accumulator, currentValue) =>
  accumulator + currentValue;
let sum = numbers.reduce(additionReducer);
console.log(sum);

// c)
var members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 }
];

let average = members.reduce((accumulator, member, index, arr) => {
  if (index == arr.length - 1) {
    return (accumulator + member.age) / arr.length;
  } else {
    return accumulator + member.age;
  }
}, 0);
console.log(average);

// d)

var votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None"
];

let voted = votes.reduce((accumulator, vote) => {
  if (accumulator[vote]) {
    accumulator[vote] += 1;
  } else {
    accumulator[vote] = 1;
  }
  return accumulator;
}, {});
console.log(voted);
