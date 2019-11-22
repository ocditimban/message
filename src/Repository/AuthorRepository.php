<?php

namespace Message\Repository;

class AuthorRepository {

    public function contruct(Mysql $con = null) {
        $this->con = $con;
    }

    public function generateToken() {

    }

    public function login(string $userName, string $password)
    {   
        # code...
        $passwordDb = $this->con('Select password from users where authorName = ?', [$userName])->fetchCol();
        if (password_verify($password, $passwordDb)) {
            $token = $this->generateToken();
            $this->con('Update token from users where authorName = ?', [$userName]);
            return $token;
        }
        return false;
    }

    public function validateToken(string $token)
    {
        $id = $this->con('Select id from users where token = ?', [$token])->fetchCol();
        return ($$id) ? true : false;
    }
}