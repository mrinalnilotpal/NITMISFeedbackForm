<?php

require "dbConnect.php";
require "httpHelper.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') 
	{    $json = file_get_contents('php://input');
         $data = json_decode($json);
         if ($data && property_exists($data, "COURSE_ID") && property_exists($data, "FAC_ID")&& property_exists($data, "DATE") && property_exists($data, "Q_1")&& property_exists($data, "Q_2")&&property_exists($data, "Q_3")&& property_exists($data, "Q_4")&& property_exists($data, "Q_5")&& property_exists($data, "Q_6")&& property_exists($data, "Q_7")&& property_exists($data, "Q_8")&& property_exists($data, "Q_9")&& property_exists($data, "Q_10")&& property_exists($data, "COMMENTS"))
         {
            $conn = dbConnect();
            $query= "INSERT INTO theory_feedback VALUES ('".$data->COURSE_ID."','".$data->FAC_ID."','".$data->DATE."','".$data->Q_1."','".$data->Q_2."','".$data->Q_3."','".$data->Q_4."','".$data->Q_5."','".$data->Q_6."','".$data->Q_7."','".$data->Q_8."','".$data->Q_9."','".$data->Q_10."','".$data->COMMENTS."')";
            if ($conn->query($query) === TRUE) 
            {
               echo json_response(201, json_encode("Feedback recorded successfully"));
            } 
           else 
            {
               echo json_response(400, json_encode("Error: " . $query . "<br>" . $conn->error));
            }
         }
         else
         {
     	     echo json_response(400, json_encode("Not full"));
         }
    }
    else 
    {    echo json_response(405, json_encode($_SERVER['REQUEST_METHOD']." method not allowed"));
    }


