// Assignment code here

//var passwordInfo = {
  Letters: 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // window prompt "how many letter would you like in your password?" 

  var pwCriteria = window.prompt("How many letters would you like to have in your password? (please enter a number between '8' and '128')");

    // var passwordLetter = window.prompt()
  // number only; so if enter integer proceed with function, else strings prompt error, return; between 8 and 128
      if (pwCriteria >= 8 && pwCriteria <= 128) {
        console.log(pwCriteria);
        return pwCriteria;
      }else if (pwCriteria === "" || pwCriteria === null){
        alert("You need to provide an answer! Please try again.");
        return writePassword();
      }else if (pwCriteria < 8 || pwCriteria > 128){
        alert("You need to provide a number within the criteria! Please enter again.");
        return writePassword();
      }else{
        alert("You need to provide a number! Please try again.")
        return writePassword();
      }
  

  // prompt = do you wish to include lowercase, uppercase, numeric, and/or special characters.
  // at least one character type should be created
  //generate password when all answers are answered
  // password should either displayed in an alert or written on page.






  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
