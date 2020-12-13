<?php

require "dbConnect.php";
require "httpHelper.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') 
	{    $json = file_get_contents('php://input');
         $data = json_decode($json);
         $conn = dbConnect();
         if ($data && property_exists($data, "roll_no") && property_exists($data, "feedback"))
         {
            $data->roll_no = strtoupper($data->roll_no);
            $feedback = $data->feedback;
            if( count($feedback) > 0)
            {
               $flag = true;
               for ($i = 0 ; $i < count($feedback); $i++)
	       {
                  $feedback_obj = $feedback[0];
                  if ( $feedback_obj && 
                        property_exists($feedback_obj, "course_id") && 
                        property_exists($feedback_obj, "fac_id") && 
                        property_exists($feedback_obj, "feedback") && 
                        property_exists($feedback_obj, "comments")
                     ) 
                     {
                        $feedback_array = $feedback_obj->feedback;
                        $count_feedback_array = count($feedback_array);
                        if ( $count_feedback_array != 10 && $count_feedback_array != 5) {
                           $flag = false;
                        }
                     }
                     else {
                        $flag = false;
                     }
               }
               
               if($flag) {
                  $date = date('Y-m-d H:i:s');
                  $lab_query_string = array();
                  $theory_query_string = array();
                  for ($i = 0 ; $i < count($feedback); $i++) {
                     $feedback_obj = $feedback[$i];
                     $feedback_qn_replies = $feedback_obj->feedback;
                     if(count($feedback_qn_replies) == 10 ) {
                        $query_obj_string = "('". $feedback_obj->course_id."','". $feedback_obj->fac_id."','".$date."', "
                        .$feedback_qn_replies[0].","
                        .$feedback_qn_replies[1].","
                        .$feedback_qn_replies[2].","
                        .$feedback_qn_replies[3].","
                        .$feedback_qn_replies[4].","
                        .$feedback_qn_replies[5].","
                        .$feedback_qn_replies[6].","
                        .$feedback_qn_replies[7].","
                        .$feedback_qn_replies[8].","
                        .$feedback_qn_replies[9].","
                        ."'".$feedback_obj->comments."')";

                        array_push($theory_query_string, $query_obj_string);
                     }
                     else {
                        $query_obj_string = "('". $feedback_obj->course_id."','". $feedback_obj->fac_id."','".$date."', "
                        .$feedback_qn_replies[0].","
                        .$feedback_qn_replies[1].","
                        .$feedback_qn_replies[2].","
                        .$feedback_qn_replies[3].","
                        .$feedback_qn_replies[4].","
                        ."'".$feedback_obj->comments."')";

                        array_push($lab_query_string, $query_obj_string);
                     }
                  }

                  $theory_query = "INSERT INTO theory_feedback VALUES ";
                  $lab_query = "INSERT INTO lab_feedback VALUES ";
                  $theory_count = count($theory_query_string);
                  $lab_count = count($lab_query_string);

                  for ($j = 0; $j < $theory_count; $j++) {
                     $theory_query = $theory_query. $theory_query_string[$j];
                     if ($j != $theory_count-1) {
                        $theory_query = $theory_query. ",";
                     }
                  }

                  for ($j = 0; $j < $lab_count; $j++) {
                     $lab_query = $lab_query. $lab_query_string[$j];
                     if ($j != $lab_count-1) {
                        $lab_query = $lab_query. ",";
                     }
                  }
                  $success_theory = true;
                  $success_lab = true;
                  $success_attendance = true;

                  $attendance_query = "INSERT INTO FEEDBACK_RESPONSES VALUES ('".$data->roll_no."')";

                  if ($conn->query($attendance_query) != TRUE) {
                     $success_attendance = false;
                  } 

                  if($theory_count > 0) {
                     if ($conn->query($theory_query) != TRUE) {
                        $success_theory = false;
                     }
                  }
                  if($lab_count > 0) {
                     if ($conn->query($lab_query) != TRUE) {
                        $success_lab = false;
                     }
                  }

                  $response= array("theory"=>$success_theory, "lab"=>$success_lab, "attendance"=>$success_attendance);
                  if($success_theory && $success_lab && $success_attendance) {
                     echo json_response(200, json_encode($response));
                  }
                  else{
                     echo json_response(400, json_encode($response));
                  }
               }
               else {
                  echo json_response(400, json_encode("Data not in proper syntax or data missing1"));
               }  
            }
            else {
               echo json_response(400, json_encode("No Feedback Supplied"));
            }
         }
         else{
            echo json_response(400, json_encode("Data not in proper syntax or data missing"));
         }
    }
    else 
    {    
      echo json_response(405, json_encode($_SERVER['REQUEST_METHOD']." method not allowed"));
    }

