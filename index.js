const inputBox = document.getElementById("boolCheck");
const test1 = document.getElementById("testButton");
const headingTest = document.getElementById("hOneTest");
function isPalindromeTest() {
    var str1 = inputBox.value;
    var str2 ="";
    for(var i = 0;str1.length>i;i++) {
        str2 = str2 + str1[str1.length-1-i];
    }

    if(str1 === str2) {
        headingTest.textContent = "Is Palindrome";
    }
    else {
                headingTest.textContent = "Is Not Palindrome";
    }

        
    



}


test1.addEventListener('click',isPalindromeTest);
