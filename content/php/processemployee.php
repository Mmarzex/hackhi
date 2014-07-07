<?php

$host="localhost"; // Host name
$username="hackihci_ryan"; // Mysql username
$password="qC@%%HSHF_.%"; // Mysql password
$db_name="hackihci_employee"; // Database name
$tbl_name="people"; // Table name

// Connect to server and select database.
mysql_connect("$host", "$username", "$password")or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB");

// Get values from form
$name=$_POST['name'];
$email=$_POST['email'];
$yesorno=$_POST['yesorno'];


// Insert data into mysql
$sql="INSERT INTO $tbl_name(name, email, yesorno)VALUES('$name', '$email', '$yesorno')";
$result=mysql_query($sql);

// if successfully insert data into database, displays message "Successful".
if($result){
echo "Thanks for the info, see you soon!";
echo "<BR>";
echo "<h1><a href='http://www.hackhi.net'>BACK TO HACKHI!</a></h1>";
}

else {
echo "ERROR";
}
?>

<?php
// close connection
mysql_close();
?>
