<?php

function json_response($code = 200, $message = null)
{
    header_remove();
    http_response_code($code);
    header('Content-Type: application/json');
    
    return json_encode(array('message' => $message));
}