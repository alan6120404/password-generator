// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // window prompt "how many letter would you like in your password?" 
  // var passwordLetter = window.prompt()
  // number only; so if enter integer proceed with function, else strings prompt error, return; between 8 and 128
  // prompt = do you wish to include lowercase, uppercase, numeric, and/or special characters.
  // at least one character type should be created
  //generate password when all answers are answered
  // password should either displayed in an alert or written on page.






  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
