<?php

namespace Message\Repository;

class MessageRepository {

    private $con;
    public function contruct(Mysql $con = null) {
        $this->con = $con;
    }

    public function createMessage(string $body, string $authorName, int $authorId = 1)
    {   
        $this->con('INSER INTO user SET body = ? AND authorName = ? AND authorId = ', [$body, $authorName, $authorId]);
        return true;
    }

    public function updateMessage(int $messageId = null, string $authorName, string $body = null)
    {
        $this->con('Update user SET body = ? AND authorName = ? WHERE messageId = ', [$body, $authorName, $messageId]);
        return true;
    }

    public function deleteMessage(int $messageId = null)
    {
        $this->con('DELETE users WHERE messageId = ', [$messageId]);
        return true;
    }
}