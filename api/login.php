<?php

require "dbConnect.php";
require "httpHelper.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    if ($data && property_exists($data, "roll_no") && property_exists($data, "password")) {
        $conn = dbConnect();
        $data->roll_no = strtoupper($data->roll_no); 
        $query = "SELECT * FROM student_credentials WHERE ROLL_NO='". $data->roll_no."'";
        $result = $conn->query($query);

        if ($result->num_rows > 0) { 

            if ($result->num_rows === 1) {
                $user = $result->fetch_assoc();
                $valid_password = password_verify($data->password, $user['PASSWORD']);
                if ($valid_password) {
                    echo json_response(200, json_encode("Successfully Logged in"));
                }
                else {
                    echo json_response(401, json_encode("Incorrect Password"));
                }
            }
            else {
                echo json_reponse(400, json_encode("Something went wrong"));
            }
        } 
        else {
            echo json_response(404, json_encode("User Account Not Found"));
        }
    }
    else {
        echo json_response(400, json_encode("roll_no or password is not supplied"));
    }
}
else {
    echo json_response(405, json_encode($_SERVER['REQUEST_METHOD']." method not allowed"));
}
