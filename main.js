
window.alert("this page requires the code to accsess");
const code = window.prompt("what is the code?");
let valid = false;

if(code.includes("0217")){
   window.alert("checking code");
   setTimeout(() => {

   window.alert("Code confirmed");
   }, 3000)
valid = true;
    setTimeout(() => {

    let username = window.prompt("What is your username?");
    let greeting = document.getElementById("Welcome");

    greeting.textContent = "Welcome " + username;

}, 4000)
}
if(code.includes(null)) {
    valid = false;
    window.alert("thats not going to work");
}

if (valid == false){
    window.alert("checking code...");
    setTimeout(() => {
     do{
       window.alert("access denied you are now trapped in a loop")
    }
    while(1 == 1);
    }, 4000)
}