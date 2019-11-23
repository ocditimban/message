<?php

namespace Message\Connection;
use PDO;
use PDOException;

class MysqlConnection {

    private $host = DB_HOST;
    private $userName = DB_USERNAME;
    private $password = DB_PASSWORD;
    private $databaseName = DB_DATABASE_NAME;

    private $connection;
    
    public function connect() {
        
        try {
            $conn = new PDO("mysql:host={$this->host};dbname={$this->databaseName}", $this->userName, $this->password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }
        catch(PDOException $e)
        {
            throw $e;
        }
        return false;
    }

    public function query(string $query, array $args = [], int $type = null) {
        if(!$this->connection) {
            $this->connection = $this->connect();
        }

        $query = $this->connection->prepare($query);
        $result = $query->execute($args);
        if ($type) {
            return $query->fetchAll($type);
        }
        return $result;
    }

}