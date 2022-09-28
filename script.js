// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.value = password; (can I change as below?)
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(condition) {
  if (condition) {
    const length = condition.length;
    const lowercase = condition.lowercase;
    const uppercase = condition.uppercase;
    const numeric = condition.numeric;
    const special = condition.special;
    let lowercaseTemplate = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseTemplate = lowercaseTemplate.toUpperCase();
    let numericTemplate = "123456789";
    let specialTemplate = "@#$%^&*()_";
    let lowercaseString = "", uppercase = "", numericString = "", specialString = "";

    for (var i=0; i < length; i++) {
      lowercaseString += lowercaseTemplate[getRandomString(lowercaseTemplate.length-1)];
      uppercaseString += uppercaseTemplate[getRandomString(uppercaseTemplate.length-1)];
      numericString += numericTemplate[getRandomString(numericTemplate.length-1)];
      specialString += specialTemplate[getRandomString(specialTemplate.length-1)];
    
      if(!lowercase) {
        lowercaseString = "";

      }

      if(!lowercase) {
        uppercaseString = "";
      }

      if(!numeric) {
        numericString = "";

      }
      
      if(!special) {
        specialString = "";
      }
    
    
    }

      let mixString = lowercaseString + uppercaseString + numericString + specialString;
      console.log(mixString)
  }
      else {
        return "not matached";
      }
}

function getRandomString(x) {
  //return 1 to x random characters
  return Math.floor(Math.random()* x) +1;
}

function getCondition() {
  const length = parseInt(promt ("Please enter at lease 8 characters and no more than 128 characters"));
  const lowercase = confirm ("Would you like to have lowercase?")
  const uppercase = confirm ("Would you like to have uppercase?")
  const numeric = confirm ("Would you like to have numeric?")
  const special = confirm ("Would you like to have special characters?")

  let condition = {
    length: length,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special,
  };

  if (!(length >= 8 && length <= 128)) {
    condition = "";
  }

  return condition;




}
