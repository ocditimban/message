<?php

namespace Message\Repository;

class AuthorRepository {

    public function contruct(Mysql $con = null) {
        $this->con = $con;
    }

    public function login(string $userName, string $password)
    {   
        # code...
    }
}