const $ = (selector) => document.querySelector(selector);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function processEntries(e){
    if($("#fname").value == undefined || $("#fname").value == null || $("#fname").value == ''){
        alert("First Name must not be blank.");
        e.preventDefault();
    }
    else if($("#lname").value == undefined || $("#lname").value == null || $("#lname").value == ''){
        alert("Last Name must not be blank.");
        e.preventDefault();
    }
    else if($("#email").value == undefined || $("#email").value == null || $("#email").value == ''){
        alert("Email field must not be blank.");
        e.preventDefault();
    }
    else if(!emailRegex.test($("#email").value)){
        alert("Invalid Email Entry.");
        e.preventDefault();
    }
    else{
        alert("Form is succesfully Sumbmited");
    }
}


document.addEventListener("DOMContentLoaded",()=>{
    $("#submit_request").addEventListener("click",processEntries);
});

function message(selector, message){
    $(selector).textContent = message;
    $(selector).style.display = "inline";
    setTimeout(hideErrorMessage, 5000, selector);
}

function hideErrorMessage(selector) {
    $(selector).textContent = "";
    document.querySelector(selector).style.display = "none";
}