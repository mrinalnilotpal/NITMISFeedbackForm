<?php

require "dbConnect.php";
require "httpHelper.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    if ($data && property_exists($data, "fac_id")) {
        $conn = dbConnect();
        $data->fac_id = strtoupper($data->fac_id); 
        $query = "select COURSE_ID, FAC_ID, COURSE_NAME, TYPE from Course_Faculty Natural Join Course where FAC_ID='".$data->fac_id."' order by COURSE_ID";
        $result = $conn->query($query);

        $response = array();

        while($row = $result->fetch_assoc()) {
            $obj = array("course_id"=> $row["COURSE_ID"], "fac_id"=> $row["FAC_ID"], "course"=> $row["COURSE_NAME"], "type"=> $row["TYPE"]);
            array_push($response, $obj);
        }
        
        echo json_response(200, json_encode($response));
    }
    else {
        echo json_response(400, json_encode("fac_id not supplied"));
    }
}
else {
    echo json_response(405, json_encode($_SERVER['REQUEST_METHOD']." method not allowed"));
}
