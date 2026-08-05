// --- Page Load & Transition Effects ---
document.addEventListener("DOMContentLoaded", function () {
    let container = document.querySelector(".container");
    if (container) {
        container.classList.add("page-transition");
    }

    const redirectLinks = document.querySelectorAll(".redirect-link a");
    redirectLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetUrl = this.getAttribute("href");

            if (container) {
                container.classList.remove("page-transition");
                container.classList.add("page-exit");
            }

            setTimeout(function () {
                window.location.href = targetUrl;
            }, 450);
        });
    });

    const actionButtons = document.querySelectorAll('input[type="submit"], input[type="reset"]');
    actionButtons.forEach(btn => {
        btn.addEventListener("mousedown", function () {
            this.classList.add("btn-clicked");
        });
        btn.addEventListener("mouseup", function () {
            this.classList.remove("btn-clicked");
        });
        btn.addEventListener("mouseleave", function () {
            this.classList.remove("btn-clicked");
        });
    });
});

// --- Validation Functions ---
function validateForm() {
    let isValidName = collect_name();
    let isValidEmail = collect_email();
    let isValidPassword = collect_password();
    let isValidAge = collect_age();

    // যদি সবগুলো ফিল্ড সঠিক থাকে, তবে true রিটার্ন করবে এবং ফর্ম সাবমিট হবে
    if (isValidName && isValidEmail && isValidPassword && isValidAge) {
        return true; 
    }
    
    return false; // কোনো একটি ভুল থাকলে সাবমিট হবে না
}

function collect_name() {
    let name = document.getElementById("Fullname").value;
    if (name === "") {
        alert("Full Name is required!");
        return false;
    }
    return true; 
}

function collect_email() {
    let email = document.getElementById("Email").value;
    if (email === "") {
        alert("Email is required!");
        return false;
    }
    return true;
}

function collect_password() {
    let password = document.getElementById("Password").value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
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
    return true;
}

function validateLogin() {
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    
    if (email === "" || password === "") {
        alert("Email and Password are required!");
        return false;
    }
    return true; 
}
// --- Panda Eye Cover Animation ---
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById('Password');
    const confirmPasswordInput = document.getElementById('ConfirmPassword');
    const panda = document.querySelector('.panda');

    // পাসওয়ার্ড ইনপুটে ক্লিক করলে চোখ ঢাকবে
    if(passwordInput && panda) {
        passwordInput.addEventListener('focus', () => {
            panda.classList.add('show-paws');
        });
        passwordInput.addEventListener('blur', () => {
            panda.classList.remove('show-paws');
        });
    }
    
    // কনফার্ম পাসওয়ার্ডেও ক্লিক করলে চোখ ঢাকবে (রেজিস্ট্রেশন পেজের জন্য, যদি সেখানে পান্ডা দেন)
    if(confirmPasswordInput && panda) {
        confirmPasswordInput.addEventListener('focus', () => {
            panda.classList.add('show-paws');
        });
        confirmPasswordInput.addEventListener('blur', () => {
            panda.classList.remove('show-paws');
        });
    }
});

// --- Lamp Click to Toggle Registration Form ---
document.addEventListener("DOMContentLoaded", function () {
    const lampWrap = document.querySelector(".lamp-wrap");
    const container = document.querySelector(".container");

    if (lampWrap && container) {
        // শুরুতে ফর্ম হাইড থাকবে
        container.classList.add("form-hidden");

        lampWrap.addEventListener("click", function () {
            container.classList.toggle("form-hidden");
            container.classList.toggle("form-visible");
        });
    }
});