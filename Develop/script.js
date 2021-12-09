// user input variables
var number = [0,1,2,3,4,5,6,7,8,9];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","J","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "+", "=","`", "~",";",":","<",">","?","/","\","|""];

var confirmLower = false
var confirmUpper = false
var confirmNumber = false
var confirmSpecial = false 

// Get references to the #generate element - targets generate ID/generate button
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

function generatePassword() {
  var characterArr = [];

  var passwordLength = window.prompt("Choose a length of at least 8 characters and no more than 128.");

  if(passwordLength <8 || passwordLength>128){
    alert ("Please select between 8 and 128 characters");
    return generatePassword();
  }
    if(window.confirm("Click OK to confirm including lowercase characters.") == true){
     confirmLower = true
     characterArr = characterArr.concat(lower);
    }

    if(window.confirm("Click OK to confirm including uppercase characters.") == true){
      confirmUpper = true
      characterArr = characterArr.concat(upper);
    }

    if(window.confirm("Click ok to confirm including special characters.") == true){
      confirmSpecial = true
      characterArr = characterArr.concat(special);
    }

    if(window.confirm("Click ok to confirm including number characters.") == true){
      confirmNumber = true
      characterArr = characterArr.concat(number);
    }

    // console.log("Confirm Lower:",confirmLower);
    // pass an array containing all the selected characters from the prompt 
   // console.log("Character Array:",characterArr);

    if(confirmLower === false && confirmUpper === false && confirmSpecial === false){
      alert("You must select at least 1 type of character to generate a password.")
      return generatePassword();
    }

    //run fo loop to use confirmed information and generate a random result password
    
    var randomPassword = "";

    for(var i = 0; i < passwordLength; i++){
      randomPassword = randomPassword + characterArr[Math.floor(Math.random() * characterArr.length)];
      console.log(randomPassword);
      }
    
    return randomPassword;

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // this is what displays generated password
  passwordText.value = password;

}

// Add event listener to generate button - when clicks, calls password function
generateBtn.addEventListener("click", writePassword);
