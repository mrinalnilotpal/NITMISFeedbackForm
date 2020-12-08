<?php

require "dbConnect.php";
require "httpHelper.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    if ($data && property_exists($data, "course_id") && property_exists($data, "fac_id") && property_exists($data, "course_type")) {
        $conn = dbConnect();
        $data->course = strtoupper($data->course_id); 
        $data->department = strtoupper($data->fac_id);
        $query_lab = "select comments from lab_feedback where FAC_ID='".$data->fac_id."' AND COURSE_ID='".$data->course_id."' AND DATE_SUB(now(), INTERVAL 6 MONTH)";
        $query_theory = "select comments  from theory_feedback where FAC_ID='".$data->fac_id."' AND COURSE_ID='".$data->course_id."' AND DATE_SUB(now(), INTERVAL 6 MONTH)";
        
        $feedback = array();

        if ($data->course_type === "theory" ) {
            $result = $conn->query($query_theory);
            while($row = $result->fetch_assoc()) {
                if($row["comments"] !== "") {
                    array_push($feedback, $row["comments"]);
                }
            }
        }
        else if ($data->course_type === "lab" ) {
            $result = $conn->query($query_lab);
            while($row = $result->fetch_assoc()) {
                if($row["comments"] !== "") {
                    array_push($feedback, $row["comments"]);
                }
            }
        }

        echo json_response(200, json_encode($feedback));
        
    }
    else {
        echo json_response(400, json_encode("course or department or year is not supplied"));
    }
}
else {
    echo json_response(405, $_SERVER['REQUEST_METHOD']." method not allowed");
}