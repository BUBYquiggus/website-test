window.alert("this page requires Moderator code to accsess");
const specialcode = window.prompt("what is the code?");
const valid = false;

if(specialcode.includes("7120")){
    valid = true;
    window.alert("Accsess granted");
    window.alert("Welcome Moderator");
}

if(valid == false){
    while(1 == 1){
        window.alert("acsess denied");
    }
}