// 1
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

//2
// const nums = {
//   num1: 500,
//   num2: 1400,
//   title: "my nums",
// };

// function multiplyByTwo(obj) {
//   const newObj = { ...obj };

//   for (let key in newObj) {
//     if (typeof newObj[key] === "number") {
//       newObj[key] *= 2;
//     }
//   }
//   return newObj;
// }
// console.log(multiplyByTwo(nums));

//3 3. Create a simple object calculator.
// const calculator = {
//   value1: null,
//   value2: null,

//   read(val1, val2) {
//     this.value1 = val1;
//     this.value2 = val2;
//   },
//   sum() {
//     return this.value1 + this.value2;
//   },
//   mul() {
//     return this.value1 * this.value2;
//   },
// };

// calculator.read(2, 3);
// console.log(calculator.sum());
// console.log(calculator.mul());

// const originalObj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const newObj = {
//   d: 4,
//   e: 5,
//   f: 6,
// };

// const ultraObj = { ...originalObj, ...newObj };
// console.log(ultraObj);

// const testObj = {
//   name: "Dany",
//   age: "32",
//   location: "Sweden",
// };

// for (let key in testObj) {
//   console.log(key, testObj[key]);
//   console.log(typeof key);
// }

// const car = {
//   brand: "lexus",
//   model: "ls400",
//   color: "green-metallic",
// };

// for (let key in car) {
//   console.log(`${key}: ${car[key]}`);
// }

//4
// const calc = {
//   value1: null,
//   value2: null,

//   add() {
//     return this.value1 + this.value2;
//   },
//   subtract() {
//     return this.value1 - this.value2;
//   },
//   multiply() {
//     return this.value1 * this.value2;
//   },
//   divide() {
//     return this.value1 / this.value2;
//   },
// };

// const results = calc.add(10).subtract(4).multiply(5).divide(9).add(10);

//JAVASCRIPT 3 GRAMMAR
//1.
function checkIfPalindrome(word) {
  word = word.toLowerCase();
  //Split delar upp ordet till en array av karaktärer, när det blir en array kan man använda metoden reverse för att vända ordningen på elementen i arrayen och sen join för att sätta ihop karaktärerna till en vanlig sträng igen.
  const reversed = word.split("").reverse().join("");

  if (word === reversed) {
    console.log(true);
  } else {
    console.log(false);
  }
}
checkIfPalindrome("level");

//2.
function capsFirstLetter(word) {
  const words = word.split(" ");
  console.log(words);

  const capsFirstWord = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });

  const capitalizedSentence = capsFirstWord.join(" ");

  console.log(capitalizedSentence);
}
capsFirstLetter("send me the money");
