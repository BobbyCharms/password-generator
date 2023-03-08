// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Identifies my variables to be used through the program 
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = 1234567890
var specialCharacters = "!@#$%^&*"
var outcome  = ""
var bank = ""

// Function to generate the password 
function generatePassword() {
  outcome = ""
  bank = ""
  // Confirming password length is within bounds 8-128 and rejecting input if not.
  var passwordLength = prompt("Please define the length of your password.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length needs to be between 8 and 128 characters.")
    generatePassword()
    // Confirming what variables should be present in the password generated. 
  } else {
    var lowercasePassword = confirm("Do you want lowercase letters in your password?")
    var uppercasePassword = confirm("Do you want uppercase letters in your password?")
    var numericPassword = confirm("Do you want numeric values in your password?")
    var specialPassword = confirm("Do you want special characters in your password?")
    // Alerts user to select one of the variable types to move forward.
    if (!lowercasePassword && !uppercasePassword && !numericPassword && !specialPassword) {
      alert("Please select one type to confirm.")
      generatePassword()
    }
    if (lowercasePassword) {
      bank += lowercase
    }
    if (uppercasePassword) {
      bank += uppercase
    }
    if (numericPassword) {
      bank += numeric
    }
    if (specialPassword) {
      bank += specialCharacters
    }
    // This should generate a password, but it's not operating properly. 
    for (var i = 0, n = bank.length; i < passwordLength; i++) {
     outcome += bank.charAt(Math.floor(Math.random() * n));
    }
  } 
  // Displays password in console and in the text box
  console.log(outcome)
  return outcome
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

