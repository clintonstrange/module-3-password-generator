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
    passwordText.value += passwordText.array[(Math.floor(Math.random() * passwordText.array.length - 1))];
    return passwordText.value
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
     for (var i = 0; i < lengthPrompt - 1; ++i) {
      var i = 0;
      randomize(passwordText.array[i]);
      console.log(passwordText.value);
      //return passwordText.value;
     }
     
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lower = ["abcdefghijklmnopqrstuvwxyz"];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var number = ["1234567890"];
var symbol = [" !@#$%^&*_+-=<>?"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);