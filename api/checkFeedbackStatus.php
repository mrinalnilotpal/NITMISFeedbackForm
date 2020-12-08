<?php

require "dbConnect.php";
require "httpHelper.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    if ($data && property_exists($data, "roll_no")) {
        $conn = dbConnect();
        $data->roll_no = strtoupper($data->roll_no); 
        $query = "SELECT * FROM FEEDBACK_RESPONSES WHERE ROLL_NO='". $data->roll_no."'";
        $result = $conn->query($query);

        if ($result->num_rows > 0) { 
            echo json_response(200, json_encode(TRUE));
        }
        else {
            echo json_response(200, json_encode(FALSE));
        }
    }
    else {
        echo json_response(400, json_encode("roll_no not supplied"));
    }
}
else {
    echo json_response(405, $_SERVER['REQUEST_METHOD']." method not allowed");
}
