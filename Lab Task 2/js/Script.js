console.log("Connected");
function collect_data()
{
    let IsvalidName= collect_Username();
    let IsvalidPassword= collect_Password();
}

function collect_Username()
{
    let Username=document.getElementById("Username").value;
    if(Username=="")
    {
        document.getElementById("NameError").innerHTML="Name Can Not Be Empty";
        return false;
    }
    if(Username.length<5)
    {
        document.getElementById("NameError").innerHTML="Name at least 5 char";
        return false;
    }
    console.log(Username);
    return false;
}

function collect_Password() {
    let Password = document.getElementById("Password").value;
    
    if (Password=="_student") {
       
        return true;
    }

    console.log("Password: " + Password);
    return true;
}





