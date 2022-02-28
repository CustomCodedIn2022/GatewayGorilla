var pressed = document.querySelector("#sub");
console.log(pressed);
var eventValue = function () {
    var message = document.body.appendChild(document.createElement('div')).textContent = 'how dare you :O';
    console.log(message);
 }
 
 pressed.addEventListener("click", eventValue, true);

 
