<?php

require "dbConnect.php";
require "httpHelper.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    if ($data && property_exists($data, "username") && property_exists($data, "password")) {
        $conn = dbConnect();
        $password_hash = password_hash($data->password, PASSWORD_BCRYPT);
        $data->username = strtoupper($data->username); 
        $query = "INSERT INTO student_credentials VALUES ('".$data->username."','".$password_hash."')";
        if ($conn->query($query) === TRUE) {
            echo json_response(201, "New record created successfully");
        } 
        else {
            echo json_response(400, "Error: " . $query . "<br>" . $conn->error);
        }
    }
    else {
        echo json_response(400, "username or password is not supplied");
    }
}
else {
    echo json_response(405, $_SERVER['REQUEST_METHOD']." method not allowed");
}
