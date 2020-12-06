<?php 

require "dbConnect.php";
require "httpHelper.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') 
{   $json = file_get_contents('php://input');
    $data = json_decode($json);
    if ($data && property_exists($data, "roll_no")) 
    {
        $conn = dbConnect();
        $data->roll_no = strtoupper($data->roll_no); 
        $query = "SELECT A.COURSE_ID, B.COURSE_NAME, D.FAC_NAME FROM Course_Reg A, Course B, Course_Faculty C, Faculty D WHERE ROLL_NO='". $data->roll_no."' AND A.COURSE_ID=B.COURSE_ID AND A.COURSE_ID=C.COURSE_ID AND C.FAC_ID=D.FAC_ID";
        $result = $conn->query($query);


        if ($result->num_rows > 0) 
        {   $courses = array();
            // output data of each row
            while($row = $result->fetch_assoc()) 
            {        $course_id = $row["COURSE_ID"];
                     $course_name = $row["COURSE_NAME"];
                     $fac_name = $row["FAC_NAME"];
            	     $course_array[]=array("course_id"=> $course_id, "course_name"=>$course_name, "fac_name"=>$fac_name);
            	     array_push($courses, $course_array);

            }
            echo json_response(200, json_encode($course_array));
         //  echo json_encode($course_array);
           // echo json_encode($courses);
            
        } 
        else 
        {    echo json_response(404, "0 results");
        }
 
    }
    else 
    {
            echo json_response(404, "User Account Not Found");
    }
}



 ?>
