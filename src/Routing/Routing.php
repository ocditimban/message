<?php

namespace Message\Routing;

use Message\Controller\AuthorController;
use Message\Controller\MessageController;

// Repository
use Message\Connection\MysqlConnection;
use Message\Repository\AuthorRepository;
use Message\Repository\MessageRepository;

class Routing {

    static function dispatch($path) {
        $msql = new MysqlConnection;
        $messageRepo = new MessageRepository($msql);
        $authRepo = new AuthorRepository($msql);

        switch ($path) {
            case '/login':
                return (new AuthorController($messageRepo))->login();
            case  '/add/message':
                return (new MessageController($messageRepo, $authRepo))->createMessage();
            case  '/update/message':
                return (new MessageController($messageRepo, $authRepo))->updateMessage();
            case  '/delete/message':
                return (new MessageController($messageRepo, $authRepo))->deleteMessage();
            case '/get/messages':
                return (new MessageController($messageRepo, $authRepo))->getMessagesByPage();
            default:
                return false;
        }
    }
}