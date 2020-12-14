<?php 

require "dbConnect.php";
require "httpHelper.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {   $json = file_get_contents('php://input');
    $data = json_decode($json);
    if ($data && property_exists($data, "course") && property_exists($data, "department") && property_exists($data, "year")) 
    {
        $conn = dbConnect();
        $data->course = strtoupper($data->course); 
        $data->department = strtoupper($data->department);
        $even_semester = $data->year * 2; 
        $odd_semester = $even_semester - 1; 
        $query = "SELECT * FROM (select distinct COURSE_ID from fee_details natural join student_details natural join Course_Reg where DATE_OF_REGISTRATION>DATE_SUB(now(), INTERVAL 6 MONTH) and COURSE_ALLOTTED='".$data->course." ".$data->department."' and (SEMESTER = ".strval($even_semester)." OR SEMESTER = ".strval($odd_semester).")) AS COURSE_CODE NATURAL JOIN Course_Faculty NATURAL JOIN Faculty NATURAL JOIN Course ORDER BY COURSE_ID";
        $result = $conn->query($query);

        $response = array();
        $prev_course_id ="";

        if($result->num_rows > 0){

            while($row = $result->fetch_assoc()) 
            {       $course_id = $row["COURSE_ID"];
                $fac_id = $row["FAC_ID"];
                $course_name = $row["COURSE_NAME"];
                $fac_name = $row["FAC_NAME"];
                $course_type = $row["type"];
                $fac_data = array("fac_id" => $fac_id , "fac_name"=>$fac_name);
                if($prev_course_id == $course_id){
                    $last_ele = array_pop($response);
                    array_push($last_ele["faculty"], $fac_data);
                    array_push($response, $last_ele);
                }
                else {
                    $fac_array = array();
                    $prev_course_id = $course_id;
                    array_push($fac_array, $fac_data);
                    $response[]=array("course_id"=> $course_id, "course_name"=>$course_name, "type" => $course_type, "faculty"=>$fac_array);
                }
            }
        }
        echo json_response(200, json_encode($response));
    }
    else 
    {
            echo json_response(404, json_encode("User Account Not Found"));
    }
}



 ?>
