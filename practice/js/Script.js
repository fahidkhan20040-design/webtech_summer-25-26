
function validateForm() {
    let isValidName = collect_name();
    let isValidEmail = collect_email();
    let isValidPassword = collect_password();
    let isValidAge = collect_age();

    
    return false;
}


function collect_name() {
    let name = document.getElementById("Fullname").value;
    
    if (name === "") {
        alert("Full Name is required!");
        return false;
    }
    
    console.log("Name: " + name);
    return true; 
}


function collect_email() {
    let email = document.getElementById("Email").value;
    
    if (email === "") {
        alert("Email is required!");
        return false;
    }
    
    console.log("Email: " + email);
    return true;
}


function collect_password() {
    let password = document.getElementById("Password").value;
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return false;
    }
    
    return true;
}


function collect_age() {
    let age = document.getElementById("Age").value;
    
    if (age === "") {
        alert("Age cannot be empty!");
        return false;
    }
    if (age < 18) {
        alert("You must be 18+ to register!");
        return false;
    }
    
    console.log("Age: " + age);
    return true;
}



function validateLogin() {
    let isValidLoginEmail = collect_login_email();
    let isValidLoginPassword = collect_login_password();

    return false; 
}

function collect_login_email() {
    let email = document.getElementById("Email").value;
    if (email === "") {
        alert("Email is required!");
        return false;
    }
    console.log("Login Email: " + email);
    return true;
}

function collect_login_password() {
    let password = document.getElementById("Password").value;
    if (password === "") {
        alert("Password is required!");
        return false;
    }
    return true;
}