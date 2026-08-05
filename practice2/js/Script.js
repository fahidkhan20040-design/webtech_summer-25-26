console.log("Connected");
// Fail attempt counter, শুরুতে 0
let attempts = 0;

// Lock অবস্থায় আছে কিনা
let isLocked = false;

function validateLogin()
{
    // প্রথমে check korbo account lock kina
    if(isLocked)
    {
        document.getElementById("LoginMessage").innerHTML = "Account is locked. Please try again after 5 minutes.";
        return false;
    }

    let isValidUsername = collect_username();
    let isValidPassword = collect_password();

    // যেকোনো field empty thakle age eita solve korte hobe
    if(isValidUsername == false || isValidPassword == false)
    {
        return false;
    }

    // Field fill up thik ase, akhon credential check korbo
    checkCredentials();

    return false;
}

function collect_username()
{
    let Username = document.getElementById("Username").value;

    if(Username == "")
    {
        document.getElementById("UsernameError").innerHTML = "Username Can Not Be Empty";
        return false;
    }

    document.getElementById("UsernameError").innerHTML = "";
    return true;
}

function collect_password()
{
    let Password = document.getElementById("Password").value;

    if(Password == "")
    {
        document.getElementById("PasswordError").innerHTML = "Password Can Not Be Empty";
        return false;
    }

    document.getElementById("PasswordError").innerHTML = "";
    return true;
}

function checkCredentials()
{
    let Username = document.getElementById("Username").value;
    let Password = document.getElementById("Password").value;

    if(Username == "AIUB" && Password == "$_student")
    {
        // Successful login, counter reset
        document.getElementById("LoginMessage").innerHTML = "Successfully Logged In";
        attempts = 0;
    }
    else
    {
        attempts++;
        console.log("Failed attempt number: ", attempts);

        if(attempts == 1)
        {
            document.getElementById("LoginMessage").innerHTML = "You have 3 attempts left.";
        }
        else if(attempts == 2)
        {
            document.getElementById("LoginMessage").innerHTML = "You have 2 attempts left.";
        }
        else if(attempts == 3)
        {
            document.getElementById("LoginMessage").innerHTML = "You have 1 attempt left. You are locked for 5 minutes.";
            lockAccount();
        }
    }
}

function lockAccount()
{
    isLocked = true;
    document.getElementById("submit").disabled = true;

    // 5 minutes = 5*60*1000 milliseconds
    setTimeout(function(){
        isLocked = false;
        attempts = 0;
        document.getElementById("submit").disabled = false;
        document.getElementById("LoginMessage").innerHTML = "You can try logging in again now.";
    }, 5*60*1000);
}