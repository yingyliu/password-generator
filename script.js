// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // ask the user for their options
  var userResponse = getCondition();

  var password = generatePassword(userResponse);
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(userPicks) {
  if (userPicks) {
    // extract the users choices from the userPicks variable
    const length = userPicks.length;
    const lowercase = userPicks.lowercase;
    const uppercase = userPicks.uppercase;
    const numeric = userPicks.numeric;
    const special = userPicks.special;

    // define what all the char should be
    let lowercaseTemplate = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseTemplate = lowercaseTemplate.toUpperCase();
    let numericTemplate = "123456789";
    let specialTemplate = "@#$%^&*()_";
    let userTemplate = "";

    // created place holder for the password that will be built
    let password = "";

    // if the user chose lc
    // -- dump lowercase int usertempate
    if (lowercase) {
      userTemplate += lowercaseTemplate;
    }
    // if the user chose uc
    // -- dump uppercase int usertempate
    if (uppercase) {
      userTemplate += uppercaseTemplate;
    }
    // if the user chose sc
    // -- dump spec int usertempate
    if (special) {
      userTemplate += specialTemplate;
    }
    // if the user chose nums
    // -- dump number int usertempate
    if (numeric) {
      userTemplate += numericTemplate;
    }
    
    // for each char slot
    for (var i = 0; i < length; i++) {
      password += userTemplate[getRandomNumber(userTemplate.length-1)];
    }

    // let mixString = lowercaseString + uppercaseString + numericString + specialString;
    // console.log(mixString.length)
    console.log(password)
    return password;
  }
  else {
    return "Not matached";
  }
}

function getRandomNumber(x) {
  //return 1 to x random characters
  return Math.floor(Math.random() * x) + 1;
}

function getCondition() {
  const length = parseInt(prompt("Please enter at lease 8 characters and no more than 128 characters"));
  const lowercase = confirm("Would you like to have lowercase?")
  const uppercase = confirm("Would you like to have uppercase?")
  const numeric = confirm("Would you like to have numeric?")
  const special = confirm("Would you like to have special characters?")

  let condition = {
    length: length,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special,
  };

  if (length < 8 || length > 128) {
    condition = "";
  }

  return condition;
}
