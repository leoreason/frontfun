<?php

$name = str_ireplace(array('select', 'insert', 'delete', 'update', 'drop', 'alter', 'truncate', 'rollback'),
                    array('selec-t', 'inser-t', 'delet-e', 'updat-e', 'dro-p', 'alte-r', 'truncat-e', 'rollbac-k'),
                    $_POST["name"]);
$email = str_ireplace(array('select', 'insert', 'delete', 'update', 'drop', 'alter', 'truncate', 'rollback'),
                    array('selec-t', 'inser-t', 'delet-e', 'updat-e', 'dro-p', 'alte-r', 'truncat-e', 'rollbac-k'),
                    $_POST["email"]);
$message = str_ireplace(array('select', 'insert', 'delete', 'update', 'drop', 'alter', 'truncate', 'rollback'),
                    array('selec-t', 'inser-t', 'delet-e', 'updat-e', 'dro-p', 'alte-r', 'truncat-e', 'rollbac-k'),
                    $_POST["message"]);

$link = mysql_connect('mysql.sql77.eznowdata.com', 'sq_frontfun', 'fuckyoufuckyou');
mysql_select_db('sq_frontfun');

//$link = mysql_connect('localhost:3306', 'root', 'password');
//mysql_select_db('world');

//mysql_query("set names 'utf8'");
$query = "insert into tbl_home_contact_message(name, email, message) values('" . $name . "', '" . $email . "', '" . $message . "')";
$result = mysql_query($query);

mysql_close($link);
echo $result;



/*
$rs = mysql_query('SELECT * FROM tbl_home_contact_message LIMIT 0, 1000');
	while($row = mysql_fetch_row($rs)) {
		print_r($row);
		echo "<br />";
}
*/
?>