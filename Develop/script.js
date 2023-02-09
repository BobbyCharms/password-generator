// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Criteria 
// - length 8-128 characters
// - confirm types of lowercase, uppercase, numeric, and/or special characters
// - validate at least one chracter type must be selected
// - when all prompts are answered, password is generated that matches
// - password is displaced in alert or written to page 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
