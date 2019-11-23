<?php

namespace Message\Repository;

use Message\Connection\MysqlConnection;
use PDO;

class MessageRepository {

    private $mysqlConnection;
    public function __construct(MysqlConnection $mysqlConnection = null) {
        $this->mysqlConnection = $mysqlConnection;
    }

    public function findMessageByMessageId(int $messageId = null)
    {
        $query = 'SELECT * FROM messages WHERE id = ?';
        return $this->mysqlConnection->query($query, [$messageId], PDO::FETCH_ASSOC);
    }

    public function findMessagesByPage($page)
    {
        $query = 'SELECT * FROM messages LIMIT 6 OFFSET ' . $page;
        return $this->mysqlConnection->query($query, [], PDO::FETCH_ASSOC);
    }

    public function createMessage(string $body, string $authorName, int $authorId)
    {
        $query = 'INSERT INTO messages (body, author_id, created, updated, author_name) VALUES (?, ?, ?, ?, ?)';
        $this->mysqlConnection->query($query, [$body, $authorId, time(), time(), $authorName]);
        return true;
    }

    public function updateMessage(int $messageId = null, string $authorName, string $body = null)
    {
        $query = 'UPDATE messages SET body = ?, author_name = ?, updated = ? WHERE id = ?';
        $this->mysqlConnection->query($query, [$body, $authorName, time(), $messageId]);
        return true;
    }

    public function deleteMessage(int $messageId = null)
    {
        $query = 'DELETE FROM messages WHERE id = ?';
        $this->mysqlConnection->query($query, [$messageId]);
        return true;
    }
}