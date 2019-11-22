<?php

namespace Message\Controller;
use Message\Repository\MessageRepository;
use Message\Repository\AuthorRepository;

class MessageController {
    private $repo;
    private $authorRepo;

    public function construct(MessageRepository $repo, AuthorRepository $authorRepo) {
        $this->repo = $repo;
        $this->authorRepo = $authorRepo;
    }

    public function validate($body)
    {
        if(!isset($body['body'])) {
            return 'body is missing';
        }

        if(!isset($body['authorName'])) {
            return 'authorName is missing';
        }

        return false;
    }

    public function validateToken($token)
    {
        return $this->authorRepo->validateToken($token);
    }


    public function createMessage()
    {
        $body = MiddleWareController::getBody();
        if ($msg = $this->validate($body)) {
            echo MiddleWareController::json_response(400, $msg);
            return ;
        }

        $result = $this->repo->addMessage($body['authorName'], $body['body']);
        if (!$result) {
            $msg = 'Can not add message';
            echo MiddleWareController::json_response(400, $msg);
            return ;
        }

        echo MiddleWareController::json_response(200, ['Ok']);
        return ;
    }

    public function updateMessage()
    {
        isset($_GET['token']) && $token = $_GET['token'];
        if (!$this->validateToken($token)) {
            $msg = 'Permission is denied';
            echo MiddleWareController::json_response(403, $msg);
            return ;
        }

        isset($_GET['messageId']) && $messageId = $_GET['messageId'];
        if(!$messageId) {
            $msg = 'Message is not found';
            echo MiddleWareController::json_response(404, $msg);
            return ;
        }


        $result = $this->repo->updateMessage($messageId, $body['body'], $body['authorName']);
        echo MiddleWareController::json_response(200, ['Ok']);
        return ;
    }

    public function deleteMessage()
    {
        isset($_GET['token']) && $token = $_GET['token'];

        if (!$this->validateToken($token)) {
            $msg = 'Permission is denied';
            echo MiddleWareController::json_response(403, $msg);
            return ;
        }

        isset($_GET['messageId']) && $messageId = $_GET['messageId'];
        if(!$messageId) {
            $msg = 'Message is not found';
            echo MiddleWareController::json_response(404, $msg);
            return ;
        }

        $result = $this->repo->updateMessage($messageId, $body['body'], $body['authorName']);
        echo MiddleWareController::json_response(200, ['Ok']);
        return ;
    }
}
