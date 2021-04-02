let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let form = document.querySelector("form");

function validateInput() {
    
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty!");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid!");
        }else{
            onSuccess(email);
        }
    }

    //password
    if (pwd.value.trim() === "") {
        onError(pwd, "Enter your password");
    } else {
        onSuccess(pwd);
        
    }
}

document.querySelector("input.button")
    .addEventListener("click", (event) => {
        event.preventDefault();
        validateInput();
    });

function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

