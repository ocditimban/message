<?php

require_once __DIR__ . '/vendor/autoload.php';

use Message\Routing\Routing;

$result = Routing::dispatch($_SERVER['REQUEST_URI']);

if ($result === false) {
    include './templates/message/index.html';
    include './../templates/message/_layouts/home.html';
    include './templates/message/index.html';
}
// use Message\MessageDatabase;

// $a = new MessageDatabase();

// echo 'hello world';

// echo $a->hello();




