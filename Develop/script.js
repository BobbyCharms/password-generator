// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = 1234567890
var specialCharacters = "!@#$%^&*"
var outcome  = ""

function generatePassword() {
  var passwordLength = prompt("Please define the length of your password.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length needs to be between 8 and 128 characters.")
    generatePassword()
  } else {
    var lowercasePassword = confirm("Do you want lowercase letters in your password?")
    var uppercasePassword = confirm("Do you want uppercase letters in your password?")
    var numericPassword = confirm("Do you want numeric values in your password?")
    var specialPassword = confirm("Do you want special characters in your password?")
    if (!lowercasePassword && !uppercasePassword && !numericPassword && !specialPassword) {
      alert("Please select one type to confirm.")
      generatePassword()
    }
    if (lowercasePassword === true) {
      outcome += lowercase
    }
    if (uppercasePassword === true) {
      outcome += uppercase
    }
    if (numericPassword === true) {
      outcome += numeric
    }
    if (specialPassword === true) {
      outcome += specialCharacters
    }
  return outcome
  console.log(outcome)
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Click generate password presents prompts for password criteria

// I can select the criteria I want in the password

// Selected criteria is validated 

// The password is generated

// The password is displayed on the page 

// Criteria 
// - length 8-128 characters
// - confirm types of lowercase, uppercase, numeric, and/or special characters
// - validate at least one character type must be selected
// - when all prompts are answered, password is generated that matches
// - password is displaced in alert or written to page 