
//LowerCase Array
var l_Alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','w','z']
//UpperCase Array
var c_Alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// Numbers Array
var numeric=["1","2","3","4","5","6","7","8","9","0"]
//special charcters
var s_Char=["!","@", "#","$","%","^","&","*","(",")","~","/","+","_"]
//New password array
var newPass=[]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Returns final result for password
function generatePassword() {
  //Prompt for the length of the password
  var askLength=prompt("What is the length of the password")
      askLength=parseInt(askLength)
    
      if(askLength < 8 || askLength > 128) {
      return alert("Put a number lower than 8 or higher than 128")
  }
//Serires of confirms for character types
  var lCase=confirm("Do you want lowercase characters?")
    if(lCase) {
      newPass=newPass.concat(l_Alpha)
  
  }

var uCase=confirm("Do you want uppercase characters?")
  if(uCase) {
    newPass=newPass.concat(c_Alpha)
   
  }

var num=confirm("Do you want numbers?")
  if(lCase) {
    newPass=newPass.concat(numeric)
  

  }

var sCase=confirm("Do you want special characters?")
  if(lCase) {
    newPass=newPass.concat(s_Char)
 
  }
//  if nothing is confirmed condition
  if(!num && !lCase && !sCase && !uCase ) {
    alert("You must choose at least one!")
}

var finishedPassword=""

  for(var i=0;i<length;i++){
    var randomIndex=Math.floor(Math.random()*newPass.length)
    finishedPassword+=newPass[randomIndex]
     
    }
    return finishedPassword     

}


generateBtn.addEventListener("click",writePassword)









