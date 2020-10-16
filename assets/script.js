// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  debugger;
  var passwordText = {
    value: [""],
    array: [""],
  }

  function randomize() {
    return Math.floor(Math.random() * passwordText.array.length)
    }

  var password = generatePassword();
    
  function generatePassword() {
    var lengthPrompt = prompt("How many characters (between 8 and 128) long should your password be?");
    lengthPrompt = parseInt(lengthPrompt);
    if ( lengthPrompt < 8 || lengthPrompt > 128 || !lengthPrompt ) {
      writePassword ();
    }
    var lowerConfirm = confirm("Click OK to include lowercase letters in your password.");
     if (lowerConfirm) {
       passwordText.array += lower;
       console.log(passwordText.array);
     }
    var upperConfirm = confirm("click OK to include uppercase letters in your password.");
     if (upperConfirm) {
       passwordText.array += upper;
       console.log(passwordText.array);
     }
    var numberConfirm = confirm("Click OK to include numbers in your password.");
     if (numberConfirm) {
       passwordText.array += number;
       console.log(passwordText.array);
     }
    var symbolsConfirm = confirm("Click OK to include symbols in your password.");
     if (symbolsConfirm) {
       passwordText.array += symbol;
       console.log(passwordText.array);
     }
     for ( i = 0; i < parseInt(lengthPrompt).length; i++) {
      randomize(passwordText.array[i]);

     }
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbol = [" ", "!", "@", "#", "$", "%", "&", "*", "-", "_", "+", "=", "?"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);