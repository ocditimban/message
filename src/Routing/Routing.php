<?php

namespace Message\Routing;

use Message\Controller\MiddleWareController;
use Message\Controller\AuthorController;
use Message\Controller\MessageController;

class Routing {

    static function dispatch($path) {
        switch ($path) {
            case '/login':
                // MiddleWareController::process();
                return (new AuthorController)->login();
            case  '/add/message':
                // MiddleWareController::process();
                return (new MessageController)->createMessage();
            case  '/update/message':
                // MiddleWareController::process();
                return (new MessageController)->updateMessage();
            case  '/delete/message':
                // MiddleWareController::process();
                return (new MessageController)->deleteMessage();
            default:
                return false;
        }
    }
}