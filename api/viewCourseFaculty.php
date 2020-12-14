<?php 

require "dbConnect.php";
require "httpHelper.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    if ($data && property_exists($data, "roll_no")) 
    {
        $conn = dbConnect();
        $data->roll_no = strtoupper($data->roll_no); 
        $query = "SELECT A.COURSE_ID, D.FAC_ID, B.COURSE_NAME, B.type, D.FAC_NAME FROM Course_Reg A, Course B, Course_Faculty C, Faculty D WHERE ROLL_NO='". $data->roll_no."' AND A.COURSE_ID=B.COURSE_ID AND A.COURSE_ID=C.COURSE_ID AND C.FAC_ID=D.FAC_ID";
        $result = $conn->query($query);


        if ($result->num_rows > 0) 
        {   
            while($row = $result->fetch_assoc()) 
            {        $course_id = $row["COURSE_ID"];
                   $fac_id = $row["FAC_ID"];
                     $course_name = $row["COURSE_NAME"];
                     $fac_name = $row["FAC_NAME"];
                     $course_type = $row["type"];
            	     $course_array[]=array("course_id"=> $course_id, "course_name"=>$course_name, "fac_id" => $fac_id , "fac_name"=>$fac_name, "type" => $course_type);

            }
            echo json_response(200, json_encode($course_array));
        } 
        else 
        {    echo json_response(404, json_encode("0 results"));
        }
 
    }
    else 
    {
            echo json_response(404, json_encode("User Account Not Found"));
    }
}



 ?>
