<?php

namespace Message\Repository;

class MessageRepository {

    private $con;
    public function contruct(Mysql $con = null) {
        $this->con = $con;
    }

    public function createMessage(string $body, int $authorId = null)
    {   
        # code...
    }

    public function updateMessage(int $messageId = null, string $body = null)
    {
        # code...
    }

    public function deleteMessage(int $messageId = null)
    {
        # code...
    }
}