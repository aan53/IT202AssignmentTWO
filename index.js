
const inputBox = document.getElementById('userInput');

const button2 = document.getElementById('button1');
 const hOne = document.getElementById("h1test");
function strReverse() {
   
   var str2 = inputBox.value;

   var temp = "";
    for(var i = 0;i<str2.length;i++) {
        temp = temp+str2.charAt(str2.length-1-i);
        
    } 
    
    hOne.textContent = temp;
      
}

button2.addEventListener('click', strReverse);