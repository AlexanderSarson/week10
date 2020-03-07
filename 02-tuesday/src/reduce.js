var members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 }
];
var reducer = function(accumulator, member, index, arr) {
  accumulator += member;
  if (index == arr.length - 1) {
    return accumulator / arr.length;
  } else {
    return accumulator;
  }
};

let average = members.reduce((accumulator, member, index, arr) => {
  if (index == arr.length - 1) {
    return (accumulator + member.age) / arr.length;
  } else {
    return accumulator + member.age;
  }
}, 0);
console.log(average);

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
  accumulator[vote] ? (accumulator[vote] += 1) : (accumulator[vote] = 1);
  return accumulator;
}, {});
console.log(voted);
