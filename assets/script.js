// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = {
  value: "",
}

// Write password to the #password input
function writePassword() {
  //debugger;
  var password = generatePassword();
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lengthPrompt = prompt("How many characters (between 8 and 128) long should your password be?");
  lengthPrompt = parseInt(lengthPrompt);
  if ( lengthPrompt < 8 || lengthPrompt > 128 || !lengthPrompt ) {
    writePassword ();
  }
  var lowerConfirm = confirm("Click OK to include lowercase letters in your password.");
   if (lowerConfirm) {
     passwordText.value += lower;
     console.log(passwordText.value);
   }
  var upperConfirm = confirm("click OK to include uppercase letters in your password.");
   if (upperConfirm) {
     passwordText.value += upper;
     console.log(passwordText.value);
   }
  var numberConfirm = confirm("Click OK to include numbers in your password.");
   if (numberConfirm) {
     passwordText.value += number;
     console.log(passwordText.value);
   }
  var symbolsConfirm = confirm("Click OK to include symbols in your password.");
   if (symbolsConfirm) {
     passwordText.value += symbol;
     console.log(passwordText.value);
   }
}


var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var symbol = " !@#$%^&*-_+=?/";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);