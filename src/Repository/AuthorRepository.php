<?php

namespace Message\Repository;

use Message\Connection\MysqlConnection;
use PDO;

class AuthorRepository {

    public function __construct(MysqlConnection $mysqlConnection = null) {
        $this->mysqlConnection = $mysqlConnection;
    }

    public function generateToken() {
        return substr(md5(uniqid(mt_rand(), true)) , 0, 8);
    }

    public function generatePassword($password) {
        return password_hash($password, PASSWORD_DEFAULT);
    }

    public function login(string $userName, string $password)
    {
        $passwordDb = $this->mysqlConnection->query('SELECT password FROM authors WHERE name = ?', [$userName], PDO::FETCH_COLUMN);
        if (password_verify($password, $passwordDb)) {
            $token = $this->generateToken();

            $query = 'UPDATE authors SET token = ? WHERE name = ?';
            $this->mysqlConnection->query($query, [$token, $userName]);
            return $token;
        }
        return false;
    }

    public function findAuthorIdByToken(string $token)
    {
        $authorId = $this->mysqlConnection->query('SELECT id from authors where token = ?', [$token], PDO::FETCH_COLUMN);
        return ($authorId) ? $authorId : 0;
    }
}