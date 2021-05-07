<?php

namespace App\Model;

class LoginManager extends AbstractManager
{
    public const TABLE = 'customer';
    protected array $valid = [];
    /**
     * Get the value of valid
     */
    public function getValid()
    {
        return $this->valid;
    }

    public function logIn($email, $password)
    {
        $statement = $this->pdo->prepare('SELECT * FROM customer WHERE email=:email AND password=:password');
        $statement->bindValue(':email', $email, \PDO::PARAM_STR);
        $statement->bindValue(':password', $password, \PDO::PARAM_STR);
        $statement->execute();

        $valid = $statement->fetch();



        if ($valid == false) {
            return -1;
        } else {
            $isPasswordCorrect = ($password == $valid['password']);

            if ($isPasswordCorrect) {
                $_SESSION['password'] = $valid['password'];
                $_SESSION['email'] = $email;
                return $valid;
            } else {
                return -1;
            }
        }
    }
}
