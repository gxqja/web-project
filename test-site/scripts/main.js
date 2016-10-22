var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    myHeading.textContent = "hello " + myName + ", welcom to mozilla";
}

myButton.onclick = function(){
    setUserName();
}


