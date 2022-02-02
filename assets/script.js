// Assignment Code

var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbol = [
  " ",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "_",
  "+",
  "-",
  "=",
  "<",
  ">",
  "/",
  "\\",
  "|",
  "?",
];

// Write password to the #password input
function pwOptions() {
  var lengthPrompt = prompt(
    "How many characters (between 8 and 128) long should your password be?"
  );
  var length = parseInt(lengthPrompt);
  if (length < 8 || length > 128) {
    alert("Desired character length must be between 8 and 128 characters.");
    return;
  }
  // console.log(length);
  if (isNaN(length) === true) {
    alert("Desired character length must be a number.");
    return;
  }

  var lowerConfirm = confirm(
    "Click OK to include lowercase letters in your password."
  );
  var upperConfirm = confirm(
    "click OK to include uppercase letters in your password."
  );
  var numberConfirm = confirm("Click OK to include numbers in your password.");
  var symbolConfirm = confirm("Click OK to include symbols in your password.");
  if (
    lowerConfirm !== true &&
    upperConfirm !== true &&
    numberConfirm !== true &&
    symbolConfirm !== true
  ) {
    alert("At least 1 character type is required.");
    return;
  }
  // object shorthand notation
  var preferences = {
    length,
    lowerConfirm,
    upperConfirm,
    numberConfirm,
    symbolConfirm,
  };
  return preferences;
}

function getRandom(arr) {
  var random = Math.floor(Math.random() * arr.length);
  var elementRandom = arr[random];
  return elementRandom;
}

function pwGenerate() {
  var userInput = pwOptions();
  var result = [];
  var chosenChars = [];
  var allChars = [];

  // object destructuring
  var {
    lowerConfirm,
    upperConfirm,
    numberConfirm,
    symbolConfirm,
    length,
  } = userInput;

  if (lowerConfirm) {
    allChars = allChars.concat(lower);
    chosenChars.push(getRandom(lower));
  }
  if (upperConfirm) {
    allChars = allChars.concat(upper);
    chosenChars.push(getRandom(upper));
  }
  if (numberConfirm) {
    allChars = allChars.concat(number);
    chosenChars.push(getRandom(number));
  }
  if (symbolConfirm) {
    allChars = allChars.concat(symbol);
    chosenChars.push(getRandom(symbol));
  }
  for (var i = 0; i < length; i++) {
    var netChars = getRandom(allChars);
    result.push(netChars);
  }
  for (var i = 0; i < chosenChars.length; i++) {
    result[i] = chosenChars[i];
  }
  return result.join("");
}

var generateBtn = document.querySelector("#generate");

function outputPassword() {
  var newPassword = pwGenerate();
  var pwValue = document.querySelector("#password");
  pwValue.value = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", outputPassword);
