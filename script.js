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
    var lowercaseTemplate = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseTemplate = lowercaseTemplate.toUpperCase();
    var numericTemplate = "0123456789";
    var specialTemplate = "@#$%^&*()_";
    var userTemplate = "";

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
    
// check does the string in the user template contains the string from the lowercaseTemplate
if (userTemplate.indexOf(lowercaseTemplate) >= 0) {
  password += lowercaseTemplate[getRandomNumber(lowercaseTemplate.length - 1)];

}
// check does the string in the user template contains the string from the uppercaseTemplate
if (userTemplate.indexOf(uppercaseTemplate) >= 0) {
  password += uppercaseTemplate[getRandomNumber(uppercaseTemplate.length - 1)];
  
}
// check does the string in the user template contains the string from the numericTemplate
if (userTemplate.indexOf(numericTemplate) >= 0) {
  password += numericTemplate[getRandomNumber(numericTemplate.length - 1)];
  
}
// check does the string in the user template contains the string from the specialTemplate
if (userTemplate.indexOf(specialTemplate) >= 0) {
  password += specialTemplate[getRandomNumber(specialTemplate.length - 1)];
  
}

const passwordLength = password.length;

//for each char slot
for (var i = 0; i < length - passwordLength; i++) {
  password += userTemplate[getRandomNumber(4)];
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
  var length, lowercase, uppercase, numeric, special;
  // check if user pressed cancel or password length does not meet the requirement
  while ((length!==null && !parseInt(length))|| parseInt(length) < 8 || parseInt(length) > 128) {
    
    length = (
      prompt("Please enter at lease 8 characters and no more than 128 characters")
    );
  }

  if (length) {

    var meetCondition;
    // check if user selected at least one condition
    while (!meetCondition) {
      lowercase = confirm("Would you like to have lowercase?");
      uppercase = confirm("Would you like to have uppercase?");
      numeric = confirm("Would you like to have numeric?");
      special = confirm("Would you like to have special characters?");
  
      meetCondition = lowercase || uppercase || numeric || special;
      
      // reminder user to choose at least one condition for the password
      if (!meetCondition) {
        alert("Reminder: You need to choose at least one condition for the password.");
      }
  
    }
    
  }


  var condition = {
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
