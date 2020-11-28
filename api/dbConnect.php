<?php
define('DB_HOST', 'sql12.freemysqlhosting.net');
define('DB_USER', 'sql12378913');
define('DB_PASS', 'E8blGYQkNY');
define('DB_NAME', 'sql12378913');

// Connect with the database.
function dbConnect()
{
  $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}