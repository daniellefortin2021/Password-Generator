// user input variables
const confirmNumber = [0,1,2,3,4,5,6,7,8,9];
const confirmLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const confirmUpper = ["A","B","C","D","E","F","G","H","J","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const confirmSpecial = array("!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "+", "=","`", "~",";",":","<",">","?","/","\","|"");

var passwordValue = '';


// Get references to the #generate element - targets generate ID/generate button
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var passwordLength = window.prompt("Choose a length of at least 8 characters and no more than 128.");

  if(passwordLength <8 || passwordLength>128){
    alert ("Please select between 8 and 128 characters");
    return generatePassword();
  }

  else{
    if(window.confirm("Click OK to confirm including lowercase characters.") == true){
     confirmLower = true
    }

    if(window.confirm("Click OK to confirm including uppercase characters.") == true){
      confirmUpper = true
    }

    if(window.confirm("Click ok to confirm including special characters.") == true){
      confirmSpecial = true
    }

    if(window.confirm("Click ok to confirm including number characters.") == true){
      confirmNumber = true
    }

    if(confirmLower === false && confirmUpper === false && confirmSpecial === false){
      alert("You must select at least 1 type of character to generate a password.")
      return generatePassword();
    }
  };

}
//literally have no idea where to go from here

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // this is what displays generated password
  passwordText.value = password;

}

// Add event listener to generate button - when clicks, calls password function
generateBtn.addEventListener("click", writePassword);
