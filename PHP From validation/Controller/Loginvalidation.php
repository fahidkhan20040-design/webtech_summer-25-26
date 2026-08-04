<?php
$name="";
$email="";
$website="";
$comment="";
$gender="";

if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $name=trim($_POST["name"] ?? "");
        $email=trim($_POST["email"] ?? "");
        $website=trim($_POST["website"] ?? "");
        $comment=trim($_POST["comment"] ?? "");
        $gender=trim($_POST["gender"] ?? "");
    
        if(!empty($name) && strlen($name)>=5)
            {
                echo "User Name: ".$name;
                echo "<br>";
            }
            else{
                echo "User Name Must be at least 5 Charectar";
            }
       
             if(!empty($email) && filter_var($email,FILTER_VALIDATE_EMAIL))
            {
                echo "Email: ".$email;
                echo "<br>";
            }
            else{
                echo "Invalid or Empty Email";
            }

            if(!empty($website))
            {
                echo "Website: " . $website;
                echo "<br>";
            }

            if(!empty($comment))
            {
             echo "Comment: " . $comment;
             echo "<br>";
            }
         
            if(!empty($gender))
    {
        echo "Gender: " . $gender;
        echo "<br>";
    }
    else{
        echo "Gender Must be Selected";
        echo "<br>";
    }
    }




?>