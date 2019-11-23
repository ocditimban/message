<?php

define('DB_HOST', 'db');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'root');
define('DB_PORT', '3306');
define('DB_DATABASE_NAME', 'message');
define('DB_MYSQL_STRING', 'mysql://' . DB_USERNAME . ':' . DB_PASSWORD . '@' . DB_HOST . ':' . DB_PORT . '/' . DB_DATABASE_NAME);