<?php
session_start();
include "../Model/db.php";

$name = "";
$password = "";
$confirm_password = "";
$address = "";
$nid_file = "";
$message = "";
$remember = false;

if (isset($_COOKIE["remember_user"])) {
    $name = $_COOKIE["remember_user"];
    $remember = true;
}

$valid = true;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"] ?? "");
    $password = trim($_POST["password"] ?? "");
    $confirm_password = trim($_POST["confirm_password"] ?? "");
    $address = trim($_POST["address"] ?? "");
    $file = $_FILES["nid_file"] ?? [];
    $remember = isset($_POST["remember"]) && $_POST["remember"] === "1";

    if (empty($name) || strlen($name) < 5) {
        $message = "User Name Must be at least 5 Char";
        $valid = false;
    }

    if (empty($password) || strlen($password) < 5) {
        $message = "Password Must be at least 5 Char";
        $valid = false;
    }

    if ($password !== $confirm_password) {
        $message = "Passwords do not match";
        $valid = false;
    }

    if (empty($address)) {
        $message = "Address cannot be empty";
        $valid = false;
    }

    if (empty($file["name"])) {
        $message = "Please upload your NID document";
        $valid = false;
    }

    if ($valid) {
        
        $_SESSION["logged_in"] = true;
        $_SESSION["username"] = $name;
        $message = "Session Created";

        if ($remember) {
            setcookie("remember_user", $name, time() + (86400 * 30), "/"); // 30 Days
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
            'password'  => password_hash($password, PASSWORD_DEFAULT),
            'address'   => $address,
            'timestamp' => time()
        ];

        file_put_contents($jsonfile, json_encode($users, JSON_PRETTY_PRINT));

       
        $path = "";
        if (!empty($file["name"])) {
            $uploaddirectory = "../Uploads/";
            
       
            if (!is_dir($uploaddirectory)) {
                mkdir($uploaddirectory, 0777, true);
            }

            $path = $uploaddirectory . time() . "_" . basename($file["name"]);
            move_uploaded_file($file["tmp_name"], $path);
        }

        
        $database = new db();
        $connection = $database->connection();
        
        
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $result = $database->signup($connection, "users", $name, $hashed_password, $address, $path);

        if ($result) {
            header("Location: ../View/login.php");
            exit();
        } else {
            echo "Please try again";
        }
    }
}
?>