<?php
include "../Controller/RegistrationValidation.php";
?>
<!DOCTYPE html>
<html>
    <head>
        <title> Registartion Page </title>
        <script>
            function collect_data()
            {
                let name = document.getElementById("name").value.trim();
                let password = document.getElementById("password").value.trim();
                let confirm_password = document.getElementById("confirm_password").value.trim();
                let address = document.getElementById("address").value.trim();
                let nid_file = document.getElementById("nid_file").value;
                let valid = true;
                let message = "";

                if(name.length < 5)
                {
                    message += "User Name Should be 5 Char";
                    valid = false;
                }
                if(password.length < 5)
                {
                    message += "Password Must be 5 Char";
                    valid = false;
                }
                if(password !== confirm_password)
                {
                    message += "Passwords do not match";
                    valid = false;
                }
                if(address === "")
                {
                    message += "Address cannot be empty";
                    valid = false;
                }
                if(nid_file === "")
                {
                    message += "Please upload your NID document";
                    valid = false;
                }

                if(!valid)
                {
                    alert(message);
                }
                return valid;
            }
        </script>
    </head>
    <body>

       <form enctype="multipart/form-data" method="post" action="" onsubmit="return collect_data()"> 
        <table>
            <tr>
                <td> <label for="name"> User Name: </label></td>
                <td> 
                    <input type="text" id="name" name="name">
                    <?php echo $name; ?>
                </td>
            </tr>

            <tr>
                <td> <label for="password"> Password: </label></td>
                <td> 
                    <input type="password" id="password" name="password">
                    <?php echo $password; ?>
                </td>
            </tr>

            <tr>
                <td> <label for="confirm_password"> Confirm Password: </label></td>
                <td> 
                    <input type="password" id="confirm_password" name="confirm_password">
                    <?php echo $confirm_password; ?>
                </td>
            </tr>

            <tr>
                <td> <label for="address"> Address: </label></td>
                <td> 
                    <textarea id="address" name="address"></textarea>
                    <?php echo $address; ?>
                </td>
            </tr>

            <tr>
                <td> <label for="nid_file"> NID Document: </label></td>
                <td>
                    <input type="file" name="nid_file" id="nid_file"> 
                    <?php echo $nid_file; ?>
                </td>
            </tr>

            <tr>
                <td colspan="2">
                    <input type="checkbox" id="remember" name="remember" value="1" <?php echo $remember ? 'checked' : ''; ?>>
                    <label for="remember"> Remember Me</label>
                </td>
            </tr>

            <tr>
                <td colspan="2">
                    <input type="submit" id="submit" value="Register">
                    <input type="reset" id="reset">
                </td>
            </tr>
        </table>
       </form>
    </body>
</html>