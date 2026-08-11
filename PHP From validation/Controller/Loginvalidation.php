<?php
$name="";
$email="";
$website="";
$comment="";
$gender="";

$remember = false;
if (isset($_COOKIE["remember_user"])) {
    $name = $_COOKIE["remember_user"];
    $remember = true;
}

$valid = true;

if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $name=trim($_POST["name"] ?? "");
        $email=trim($_POST["email"] ?? "");
        $website=trim($_POST["website"] ?? "");
        $comment=trim($_POST["comment"] ?? "");
        $gender=trim($_POST["gender"] ?? "");
    
        if (!empty($name) && strlen($name) >= 5) 
        {
        echo "User Name: " . $name . "<br>";
        } 
        else
        {
        echo "User Name Must be at least 5 Characters<br>";
        $valid = false;
        }
       
             if(!empty($email) && filter_var($email,FILTER_VALIDATE_EMAIL))
            {
                echo "Email: ".$email;
                echo "<br>";
                
            }
            else{
                echo "Invalid or Empty Email";
                echo "<br>";

                $valid = false;
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
            else
            {
            echo "Gender Must be Selected";
            echo "<br>";
            $valid = false;
    }
    if ($valid) {
    
        if ($remember) {
            setcookie("remember_user", $name, time() + (86400 * 30), "/"); 
        } else {
            setcookie("remember_user", "", time() - 3600, "/"); 
        }

    $jsonfile = "../Model/user.json";
        $users = [];

        if (file_exists($jsonfile)) {
            $jsonData = file_get_contents($jsonfile);
            $users = json_decode($jsonData, true) ?? [];
        }   
        
    $users[] = [
            'username'  => $name,
            'email'     => $email,
            'website'   => $website,
            'comment'   => $comment,
            'gender'    => $gender,
            'timestamp' => time()
        ];

    if (file_put_contents($jsonfile, json_encode($users, JSON_PRETTY_PRINT)))
    {
    echo "<br><b>Data Saved & handled successfully!</b><br>";
    }
    else 
    {
    echo "<br><b>Failed to Save Data!</b><br>";
    }
    }
    }




?>