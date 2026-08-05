<?php
include "../Controller/Loginvalidation.php";
?>
<!DOCTYPE html>
<html>
    <head>
        <title> PHP From Validation </title>
        <script>
            function collect_data()
            {
                let name = document.getElementById("name").value.trim();
                let email = document.getElementById("email").value.trim();

                let female = document.getElementById("female").checked;
                let male = document.getElementById("male").checked;
                let other = document.getElementById("other").checked;
                
                let valid = true;
                let message="";

                if(name.length === 0)
                {
                    message+="User Name is required ";
                    valid = false;
                }
                else if(name.length <5)
                {
                 message+="User Name Should be 5 Char ";
                    valid = false;
                }
                if(email.length === 0)
                {
                    message+="E-mail is required ";
                    valid = false;
                }

                if(!female && !male && !other)
                {
                    message += "Gender is required ";
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
        <h2>PHP From Validation</h2>
        <p style="color:red;">* required field</p>

       <form method="post" action="" onsubmit="return collect_data()"> 
        <table>
            <tr>
                <td> <label for="name"> Name: </label></td>
                <td> <input type="text" id="name" name="name">
                <?php echo $name ?>
            </td>
           
            </tr>

             <tr>
                <td> <label for="email"> email: </label></td>
                <td> <input type="text" id="email" name="email">
                <?php echo $email ?>
            </td>
            
            </tr>
            
            <tr>
                <td><label for="website">Website: </label></td>
                <td><input type="text" id="website" name="website" value="<?php echo $website; ?>"> </td>
            </tr>

            <tr>
                <td><label for="comment">Comment: </label></td>
                <td><input type="text" id="comment" name="comment" value="<?php echo $comment; ?>"> </td>
            </tr>
 
            <tr>
                <td><label>Gender: </label></td>
                <td>
                    <input type="radio" id="female" name="gender" value="female">
                    <label for="female">Female</label>

                    <input type="radio" id="male" name="gender" value="male">
                    <label for="male">Male</label>

                    <input type="radio" id="other" name="gender" value="other">
                    <label for="other">Other</label>
                </td>

            </tr>

            <tr>
                <td colspan="2">
                    <br>
                    <input type="submit" id="submit" value="LogIn">
                    <input type="reset" id="reset">
                </td>
            </tr>
        </table>
       </form>
    </body>
</html>
