<?php

namespace Message\Controller;
use Message\Repository\AuthorRepository;


class AuthorController {

    private $repo;

    public function construct(AuthorRepository $repo) {
        $this->repo = $repo;
    }

    public function validate($body) {
        if (!isset($body['authorName'])) {
            return 'Author name is missing';
        }

        if (!isset($body['password'])) {
            return 'Author name is missing';
        }
        return false;
    }

    public function login()
    {
        $body = MiddleWareController::getBody();
        
        if ($msg = $this->validate($body)) {
            echo (MiddleWareController::json_response(400, $msg));
            return ;
        }

        $authorName = $body['authorName'];
        $password = $body['password'];

        $result = $this->repo->login($authorName, $password);
        if (!$result) {
            $msg = 'Invalid authorName or password';
            echo MiddleWareController::json_response(400, $msg);
            return ;
        }

        echo MiddleWareController::json_response(200, ['token' => $result]);
        return ;
    }
}
