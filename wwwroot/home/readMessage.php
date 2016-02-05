<?php

$link = mysql_connect('mysql.sql77.eznowdata.com', 'sq_frontfun', 'fuckyoufuckyou');
mysql_select_db('sq_frontfun');

$rs = mysql_query('SELECT * FROM tbl_home_contact_message LIMIT 0, 1000');
	while($row = mysql_fetch_row($rs)) {
		print_r($row);
		echo "<br />";
}
mysql_close($link);

?>