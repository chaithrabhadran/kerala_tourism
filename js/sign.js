let names = document.getElementById("name");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let phone = document.getElementById("phone");
let cpwd = document.getElementById("cpwd");
let form = document.querySelector("form");

function validateInput() {
    // check username is empty 
    if (names.value.trim() === "") {
        onError(names, "Name cannot be empty");
    }
    else {
        document.getElementById("inames").style.visibility = "visible";
        onSuccess(names);
    }

    if (email.value.trim() === "") {
        onError(email, "Email cannot be empty!");
    } else {
        if (!isValidEmail(email.value.trim())) {
            onError(email, "Enter a valid email address");
        } else {
            document.getElementById("iemail").style.visibility = "visible";
            onSuccess(email);
        }
    }

    //password
    if (pwd.value.trim() === "") {
        onError(pwd, "Password cannot be empty!");
    } else {
       
       validatePassword(pwd);
        // if (!isValidPwd(pwd.value.trim())) {
        //     onError(pwd, "Password should contain atleast one lowercase,uppercase,number and special character");
        // } else {
        //     onSuccess(pwd);
        // }
    }
    if (cpwd.value.trim() === "") {
        onError(cpwd, "Password cannot be empty");
    } else {
        if (pwd.value.trim() !== cpwd.value.trim()) {
            onError(cpwd, "Password & Confirm password not matching");
        }
        else
        {document.getElementById("icpwd").style.visibility = "visible";
            onSuccess(cpwd);}
    }
    //phone
    if (phone.value.trim() === "") {
        onError(phone, "Number cannot be empty!");


    } else {
        if (!isValidPhone(phone.value.trim())) {
            onError(phone, "Enter a Valid mobile number");
        } else {
            document.getElementById("iphone").style.visibility = "visible";
            onSuccess(phone);
        }
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
function isValidPhone(phone) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
}
// function isValidPwd(pwd) {
//     return /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(pwd);
// }
function validatePassword(pwd) {
                
    
    if (pwd.value.length < 8) {
        // console.log(getElementById("msg"));
        // console.log(msg);
        document.getElementById("msg").innerText = "Password should be atleast 8 characters";
        document.getElementById("textbox1").style.height="45px";

        // return;
    }
    else{
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); 
    matchedCase.push("[A-Z]");      
    matchedCase.push("[0-9]");      
    matchedCase.push("[a-z]");     

    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(pwd.value)) {
            ctr++;
        }
    }
    var color = "";
    var strength = "";
    var visibility="";
    switch (ctr) {
        case 0:strength = "Weak";
                 color = "red";
                            break;
        case 1:strength = "Weak";
                    color = "red";
                 break;
        case 2:
            strength = "Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "lightgreen";
            visibility="visible";
    document.getElementById("ipwd").style.visibility = visibility;

            break;
    }
    // document.getElementById("msg").innerHTML = strength;
    // let par = pwd.parentElement;
    // let msgEle = par.querySelector("small");
    // msgEle.style.visibility = "visible";
    // msgEle.innerText = strength;
    onError(pwd,strength);
    
    document.getElementById("msg").style.color = color;

}}
function resetcolor(){
    var color="red";
    document.getElementById("msg").style.color=color;
    document.getElementById("inames").style.visibility = "hidden";
    document.getElementById("ipwd").style.visibility = "hidden";

    document.getElementById("icpwd").style.visibility = "hidden";
    document.getElementById("iemail").style.visibility = "hidden";

    document.getElementById("iphone").style.visibility = "hidden";
    

}

