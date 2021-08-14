// Assignment Code
let generateBtn = document.querySelector("#generate");

let resultEl = document.getElementById("password");

function getRandomLower(){
  let lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)];
}

function getRandomUpper(){
  let upper = "ABCDEFGHIJKLNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)];
}

function getRandomNumber(){
  let number = "0123456789";
  return number[Math.floor(Math.random() * number.length)];
}

function getRandomSpecial(){
  let special = "!@#$%^&*()_+-=,.<>";
  return special[Math.floor(Math.random() * special.length)];
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  if (password) passwordText.value = password;
}

function generatePassword() {
  let passwordGenerated = "";
  let passwordLength = prompt("Please enter the length of your password.");

  if (passwordLength === null) {
    return;
  }
  else if (129 > passwordLength && passwordLength > 7) {
    passwordLength = parseInt(passwordLength);
  }
  else {
    alert("Please enter a number between 8 and 128.")
    return;
  }

  let lowerCaseConfirm = confirm("Would you like to use lower case letters in your password?");
  let upperCaseConfirm = confirm("Would you like to use upper case letters in your password?");
  let numericConfirm = confirm("Would you like to use numbers in your password?");
  let specialConfirm = confirm("Would you like to use special characters in your password?");

  if (!lowerCaseConfirm && !upperCaseConfirm && !numericConfirm && !specialConfirm) {
    alert("You must select at least one parameter for your password.");
  } else {
    for (let i = 0; i < passwordLength; i++) {
      if (lowerCaseConfirm) {
        passwordGenerated += getRandomLower();
        if (passwordGenerated.length === passwordLength) break;
      } if (upperCaseConfirm) {
        passwordGenerated += getRandomUpper();
        if (passwordGenerated.length === passwordLength) break;
      } if (numericConfirm) {
        passwordGenerated += getRandomNumber();
        if (passwordGenerated.length === passwordLength) break;
      } if (specialConfirm) {
        passwordGenerated += getRandomSpecial();
        if (passwordGenerated.length === passwordLength) break;
      }
    }
    return passwordGenerated;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
