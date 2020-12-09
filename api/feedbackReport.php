<?php

require "dbConnect.php";
require "httpHelper.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    if ($data && property_exists($data, "course_id") && property_exists($data, "fac_id")) {
        $conn = dbConnect();
        $data->course = strtoupper($data->course_id); 
        $data->department = strtoupper($data->fac_id);
        $query = "select COURSE_NAME, TYPE, FAC_NAME from Course NATURAL JOIN Course_Faculty NATURAL JOIN Faculty where COURSE_ID='".$data->course_id."'AND FAC_ID ='".$data->fac_id."'";
        $details_res = $conn->query($query);
        if ($details_res->num_rows === 0) {
            echo json_response(400, json_encode("No data"));
        } 
        else{
            $details = $details_res->fetch_assoc();
            $type = $details["TYPE"];
            $fac_name = $details["FAC_NAME"];
            $course_name = $details["COURSE_NAME"];
            $query_lab = "select avg(Q_1), avg(Q_2), avg(Q_3), avg(Q_4), avg(Q_5) from lab_feedback where FAC_ID='".$data->fac_id."' AND COURSE_ID='".$data->course_id."' AND DATE_SUB(now(), INTERVAL 6 MONTH)";
            $query_theory = "select avg(Q_1), avg(Q_2), avg(Q_3), avg(Q_4), avg(Q_5), avg(Q_6), avg(Q_7), avg(Q_8), avg(Q_9), avg(Q_10)  from theory_feedback where FAC_ID='".$data->fac_id."' AND COURSE_ID='".$data->course_id."' AND DATE_SUB(now(), INTERVAL 6 MONTH)";
            
            $feedback = array();
            
            if ($type === "theory" ) {
                $result = $conn->query($query_theory);
                $row = $result->fetch_assoc();
                for( $i=1; $i<11; $i++) {
                    array_push($feedback, $row["avg(Q_".strval($i).")"]);
                }
            }
            else if ($type === "lab" ) {
                $result = $conn->query($query_lab);
                $row = $result->fetch_assoc();
                for( $i=1; $i<6; $i++) {
                    array_push($feedback, $row["avg(Q_".strval($i).")"]);
                }
            }
            $response = array("fac_name"=> $fac_name,"course_id"=>$data->course_id ,"course_name"=>$course_name, "course_type"=>$type, "feedback"=> $feedback);
            echo json_response(200, json_encode($response));
        }
            
    }
    else {
        echo json_response(400, json_encode("course or department or year is not supplied"));
    }
}
else {
    echo json_response(405, $_SERVER['REQUEST_METHOD']." method not allowed");
}