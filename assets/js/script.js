// Assignment code here


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
        var pwLowercase = window.confirm("do you wish to include lowercase?");
        
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

// if user wants uppercase true/false
      var pwUppercase = window.confirm("do you wish to include uppercase?");
// if user wants numbers true/false
      var pwNumber = window.confirm("do you wish to include numbers?");
// if user wants special character true/false
      var pwSpecial = window.confirm("do you wish to include special characters?");
// at least one character type should be created
      if (pwLowercase === false && pwUppercase === false && pwNumber === false && pwSpecial === false) {
        alert("Why even?");
        return;
      }
 



  //generate password when all answers are answered
  var pwGenerate = function() {
    //setting a charset for the characters
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChar = "0123456789";
    var specialChar = "!@#$%^&*()-=_+{}|[~`]:<>?,./";

    //defining the condition of what the user has enter
    if (pwLowercase) {
      l = lowerChar;
    }else{
      l = "";
    }

    if (pwUppercase) {
      u = upperChar;
    }else{
      u = "";
    }

    if (pwNumber) {
      n = numberChar;
    }else{
      n = "";
    }

    if (pwSpecial) {
      s = specialChar;
    }else{
      s = "";
    }
    //what the char result is going to be
    var char = l + u + n + s;

    var passwordLength = pwCriteria;
    var password = "";
    // setting a for loop for the password generate; the length of the password should be shorter than the passwordLength
    for (var i = 0; i < passwordLength; i++) {
    // the random number should be a whole number
    // the random number should include all the char character that was inputted by the user
      var randomNumber = Math.floor(Math.random() * char.length);
    // extract individual strings by using substring
    //setting start and end to variable so it jumps around
      password += char.substring(randomNumber, randomNumber + 1);
    }
    console.log(password);
    passwordText.value = password;
  }
  // password should either displayed in an alert or written on page.
  pwGenerate();
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
