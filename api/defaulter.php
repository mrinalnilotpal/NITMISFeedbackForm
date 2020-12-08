<?php

require "dbConnect.php";
require "httpHelper.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    if ($data && property_exists($data, "course") && property_exists($data, "department") && property_exists($data, "year")) {
        $conn = dbConnect();
        $data->course = strtoupper($data->course); 
        $data->department = strtoupper($data->department);
        $even_semester = $data->year * 2; 
        $odd_semester = $even_semester - 1; 
        $query_all = "select ROLL_NO, NAME_OF_CANDIDATE, SEMESTER, COURSE_ALLOTTED, DATE_OF_REGISTRATION FROM fee_details NATURAL JOIN student_details where COURSE_ALLOTTED='".$data->course." ".$data->department."' and DATE_OF_REGISTRATION > DATE_SUB(now(), INTERVAL 6 MONTH) and (SEMESTER = ".strval($even_semester)." OR SEMESTER = ".strval($odd_semester).") ORDER BY ROLL_NO";
        $query_submitted = "select ROLL_NO, NAME_OF_CANDIDATE FROM FEEDBACK_RESPONSES NATURAL JOIN student_details WHERE COURSE_ALLOTTED='".$data->course." ".$data->department."' ORDER BY ROLL_NO";
        $result_all = $conn->query($query_all);
        $result_submitted = $conn->query($query_submitted);

        $submitted = $result_submitted->fetch_assoc();
        $defaulters = array();

        while($row = $result_all->fetch_assoc()) {
            if($submitted["ROLL_NO"] === $row["ROLL_NO"]) {
                $submitted = $result_submitted->fetch_assoc();
                // echo json_encode($submitted);
            }
            else {
                $obj = array("roll_no" => $row["ROLL_NO"], "name"=> $row["NAME_OF_CANDIDATE"]);
                array_push($defaulters, $obj);
            }
        }
    
        echo json_response(200, json_encode($defaulters));
        
    }
    else {
        echo json_response(400, json_encode("course or department or year is not supplied"));
    }
}
else {
    echo json_response(405, $_SERVER['REQUEST_METHOD']." method not allowed");
}