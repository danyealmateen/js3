//JAVASCRIPT 3 GRAMMAR

//1.Palindrome övning
function checkIfPalindrome(word) {
  word = word.toLowerCase();
  const reversed = word.split("").reverse().join("");

  if (word === reversed) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}
// checkIfPalindrome("hannah");

//2.Capitalize the first letter of each word in a sentence
function capsFirstLetter(word) {
  const words = word.split(" ");
  const capsFirstWord = words.map((word) => {
    const firstLetterUpperCased = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    const newWord = firstLetterUpperCased + restOfWord;
    return newWord;
  });
  const capitalizedSentence = capsFirstWord.join(" ");
  // console.log(capitalizedSentence);
}
capsFirstLetter("send me the money");

//3.Reverse a string
function reverseString(word) {
  const reversedString = word.split("").reverse().join("");
  return reversedString;
}
reverseString("hello");

//4.Loop through a string of character
function isLetter(stringy) {
  const regex = /^[A-Za-z]$/;
  const vowels = "aeiou";
  const chars = stringy.split("");
  let result = chars.map((char) => {
    //testa char mot regex för att se om det är en bokstav
    if (regex.test(char)) {
      let nextChar;
      //om char är större eller lika med charen "a" och mindre eller lika med z så returna en jämförelse där man kollar om char är z isånafall ska den returnera a annars konvertera char i detta fallet till ett ASCII (american standard code for information interchange) värde som blir en siffra, t,ex 'A' har värdet 65, 'B' har värdet 66 och plussa på med 1.
      if (char >= "a" && char <= "z") {
        nextChar =
          char === "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1);
      } else if (char >= "A" && char <= "Z") {
        //samma sak som ovan fast med stora versaler
        nextChar =
          char === "Z" ? "A" : String.fromCharCode(char.charCodeAt(0) + 1);
      }
      if (vowels.includes(nextChar)) {
        nextChar = nextChar.toUpperCase();
      }

      return nextChar;
    } else {
      //returnera char oförändrat om det inte är en bokstav
      return char;
    }
  });
  return result.join("");
}
// console.log(isLetter("Javascript3"));

//5
function validatePara(val) {
  const regex = /^[a-zA-Z0-9_]+$/;
  const startCharRegex = /^[a-zA-Z]/;

  if (!regex.test(val)) {
    console.log(
      "Not a valid string. Only alphanumerical characters and underscore are allowed."
    );
    return false;
  }

  if (!startCharRegex.test(val)) {
    console.log("Invalid first character. It must be a letter a-z/A-Z.");
    return false;
  }

  if (val.slice(-1) === "_") {
    console.log("The last character cannot be an underscore (_).");
    return false;
  }

  if (val.length < 4) {
    console.log("Need more characters");
    return false;
  } else if (val.length > 25) {
    console.log("Too many characters");
    return false;
  }
  console.log("Parameter is valid");
  falseOrTrue = true;
  return true;
}

// const validationResult = validatePara("javascript");
// console.log(validationResult);

//6
function countOccurences(char, str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      console.log("str[i]:", str[i]);
      count++;
    }
  }
  return count;
}
// console.log(countOccurences("a", "jaaaavascript"));

//7
function longestWord(str) {
  const splittedWord = str.split(" ");
  let longest = "";

  splittedWord.map((word) => {
    const onlyLetters = /^[a-zA-Z]/;
    if (onlyLetters.test(word) && word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}
// console.log(longestWord("Hello my name is JavascriptSlayer99"));

//8
function duplicatedValues(arr) {
  let occurrences = {};
  let duplicates = [];

  for (let item of arr) {
    if (occurrences[item]) {
      if (occurrences[item] === 1) {
        duplicates.push(item);
      }
      occurrences[item]++;
    } else {
      occurrences[item] = 1;
    }
  }
  return duplicates;
}
// console.log(duplicatedValues([1, 2, 2, 3, 3, "hi", "hi"]));

//9 Create a function that counts the occurrences of a value in an array.
//EX: [1,2,2,3,4,6,7,1,4] -> { '1': 2, '2': 2, '3': 1, '4': 2, '6': 1, '7': 1 }
function countOccurrencies(arr) {
  let occuObj = {};

  for (let ele of arr) {
    if (occuObj[ele]) {
      occuObj[ele]++;
    } else {
      occuObj[ele] = 1;
    }
  }
  return occuObj;
}
// console.log(countOccurrencies([1, 1, 2]));

//10
let listOfCryptoPrices = [5, 12, 4, 2, 1, 20];
function calcCrypto() {
  let maxProfit = 0;
  let minPrice = listOfCryptoPrices[0];

  for (let i = 1; i < listOfCryptoPrices.length; i++) {
    console.log(listOfCryptoPrices[i]);
    if (listOfCryptoPrices[i] < minPrice) {
      minPrice = listOfCryptoPrices[i];
    } else if (listOfCryptoPrices[i] - minPrice > maxProfit) {
      maxProfit = listOfCryptoPrices[i] - minPrice;
    }
  }
  return maxProfit;
}
// console.log(calcCrypto(listOfCryptoPrices));

//11
function arrOfNums(nums) {
  let highestNumber = nums[0];
  let sumOfSmallerNumbers = 0;

  //hitta högsta talet
  nums.forEach((num) => {
    if (num > highestNumber) {
      highestNumber = num;
    }
  });

  //alla små tal tsm
  nums.forEach((num) => {
    if (num !== highestNumber) {
      sumOfSmallerNumbers += num;
    }
  });

  if (sumOfSmallerNumbers > highestNumber) {
    console.log("true - smaller numbers prevail");
    return true;
  } else {
    console.log("false - biggest number wins");
    return false;
  }
}
arrOfNums([1, 1, 5]);
arrOfNums([3, 3, 4]);

//12
function calcGeo(geo) {
  const pi = Math.PI;
  return geo.map((radius) => {
    const area = parseFloat((pi * Math.pow(radius, 2)).toFixed(2));
    const circ = parseFloat((2 * pi * radius).toFixed(2));
    const dia = parseFloat((2 * radius).toFixed(2));
    return {
      radius: radius,
      area: area,
      circ: circ,
      dia: dia,
    };
  });
}
const circles = calcGeo([2, 1, 4]);
console.log(circles);
