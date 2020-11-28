API Code

- The dbConnect.php exports a dbConnect() function which can be used everywhere else to connect to the Database.
- httpHelper.php exports json_response(response_code, message) function which should be used to return response. The message can be string or JSON encoded object.
