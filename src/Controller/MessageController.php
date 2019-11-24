<?php

namespace Message\Controller;
use Message\Repository\MessageRepository;
use Message\Repository\AuthorRepository;

class MessageController {
    private $repo;
    private $authorRepo;

    public function __construct(MessageRepository $repo, AuthorRepository $authorRepo) {
        $this->repo = $repo;
        $this->authorRepo = $authorRepo;
    }

    public function validate($body)
    {
        if (!isset($body['body'])) {
            return 'body is missing';
        }

        if (!isset($body['author_name'])) {
            return 'author_name is missing';
        }

        return false;
    }

    public function validateToken($token)
    {
        return $this->authorRepo->findAuthorIdByToken($token);
    }


    public function createMessage()
    {
        $body = MiddleWareController::getBody();
        if ($msg = $this->validate($body)) {
            echo MiddleWareController::json_response(400, $msg);
            return ;
        }

        isset($_GET['token']) && $token = $_GET['token'];
        $authorId = ($token) ? $this->authorRepo->findAuthorIdByToken($token) : 0;
        $result = $this->repo->createMessage($body['author_name'], $body['body'], $authorId);
        if (!$result) {
            $msg = 'Can not create message';
            echo MiddleWareController::json_response(400, $msg);
            return ;
        }

        echo MiddleWareController::json_response(200, ['Ok']);
        return ;
    }

    public function updateMessage()
    {
        isset($_GET['token']) && $token = $_GET['token'];
        if (!$token || !$this->validateToken($token)) {
            $msg = 'Permission is denied';
            echo MiddleWareController::json_response(403, $msg);
            return ;
        }

        isset($_GET['message_id']) && $messageId = $_GET['message_id'];
        if (!$messageId || !$this->repo->findMessageByMessageId($messageId)) {
            $msg = 'Message is not found';
            echo MiddleWareController::json_response(404, $msg);
            return ;
        }

        $body = MiddleWareController::getBody();
        if ($msg = $this->validate($body)) {
            echo MiddleWareController::json_response(400, $msg);
            return ;
        }

        $result = $this->repo->updateMessage($messageId, $body['author_name'], $body['body']);
        echo MiddleWareController::json_response(200, ['Ok']);
        return ;
    }

    public function deleteMessage()
    {
        isset($_GET['token']) && $token = $_GET['token'];

        if (!$token || !$this->validateToken($token)) {
            $msg = 'Permission is denied';
            echo MiddleWareController::json_response(403, $msg);
            return ;
        }

        isset($_GET['message_id']) && $messageId = $_GET['message_id'];
        if (!$messageId || !$this->repo->findMessageByMessageId($messageId)) {
            $msg = 'Message is not found';
            echo MiddleWareController::json_response(404, $msg);
            return ;
        }

        $result = $this->repo->deleteMessage($messageId);
        echo MiddleWareController::json_response(200, ['Ok']);
        return ;
    }

    public function getMessagesByPage()
    {
        isset($_GET['page']) && $page = $_GET['page'];
        
        if ($page === null) {
            $msg = 'Page is not found';
            echo MiddleWareController::json_response(404, $msg);
            return ;
        }

        isset($_GET['split']) && $split = $_GET['split'];
        if (!$split) {
            $msg = 'Split is not found';
            echo MiddleWareController::json_response(404, $msg);
            return ;
        }

        $messages = $this->repo->findMessagesByPage($page, $split);
        
        $results = [];
        foreach($messages as $message) {
            $results[] = [
                'id' => $message['id'],
                'body' => $message['body'],
                'author_name' => $message['author_name'],
                'created' => $this->getTimeStringByUnix($message['created']),
            ];
        }

        $data = [
            'messages' => $results,
            'total_page' => $this->repo->calculatePage($split)
        ];

        echo MiddleWareController::json_response(200, $data);
        return ;
    }

    public function getTimeStringByUnix($unix) {
        // die(print_r((strtotime($unix))));
        $dtm = new \DateTime('@' .$unix);
        $dtm->setTimezone(new \DateTimeZone('Asia/Ho_Chi_Minh'));
        return $dtm->format('dS M, Y') . ' at ' . $dtm->format('h:ia');
    }
}
