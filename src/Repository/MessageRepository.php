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

    public function findMessagesByPage($page, $split)
    {
        $query = 'SELECT * FROM messages ORDER BY id DESC LIMIT ' . $split . ' OFFSET ' . ($page * $split);
        return $this->mysqlConnection->query($query, [], PDO::FETCH_ASSOC, $fetchAll = true);
    }

    public function calculatePage($split) {
        $query = 'SELECT count(*) FROM messages';
        $totalMessage = $this->mysqlConnection->query($query, [], PDO::FETCH_COLUMN);
        return ceil($totalMessage / $split);
    }

    public function createMessage(string $authorName, string $body, int $authorId)
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