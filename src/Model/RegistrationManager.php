<?php

namespace App\Model;

class RegistrationManager extends AbstractManager
{
    public const TABLE = 'customer';

    /**
     * Insert new customer in database
     */

    public function insertCustomer(
        $lastname,
        $firstname,
        $address,
        $postalCode,
        $city,
        $phoneNumber,
        $email,
        $password
    ) {


        $query = 'INSERT INTO customer (lastname, firstname, address, postal_code, city, phone_number, email, password)
                    VALUES (:lastname, :firstname, :address, :postal_code, :city, :phone_number, :email, :password);';

        $statement = $this->pdo->prepare($query);
        $statement->bindValue(':lastname', $lastname, \PDO::PARAM_STR);
        $statement->bindValue(':firstname', $firstname, \PDO::PARAM_STR);
        $statement->bindValue(':address', $address, \PDO::PARAM_STR);
        $statement->bindValue(':postal_code', $postalCode, \PDO::PARAM_INT);
        $statement->bindValue(':city', $city, \PDO::PARAM_STR);
        $statement->bindValue(':phone_number', $phoneNumber, \PDO::PARAM_INT);
        $statement->bindValue(':email', $email, \PDO::PARAM_STR);
        $statement->bindValue(':password', $password, \PDO::PARAM_STR);
        $statement->execute();
    }
}
