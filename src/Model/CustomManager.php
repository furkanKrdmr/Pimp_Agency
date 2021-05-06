<?php

namespace App\Model;

class CustomManager extends AbstractManager
{
    public const TABLE = 'model';


    public function insertConfig(array $item, string $customerId): int
    {
        $statement = $this->pdo->prepare("INSERT INTO " . self::TABLE . " (name_moto, couleur_moto, couleur_retro,
         couleur_selle, prix_moto, prix_retro, prix_selle, customer_id)  
        values (:name_moto, :couleur_moto, :couleur_retro, :couleur_selle,
             :prix_moto,:prix_retro, :prix_selle, :$customerId);");

        $statement->bindValue(':name_moto', $item['moto'], \PDO::PARAM_STR);
        $statement->bindValue(':couleur_moto', $item['couleur_moto'], \PDO::PARAM_STR);
        $statement->bindValue(':couleur_retro', $item['couleur_retro'], \PDO::PARAM_STR);
        $statement->bindValue(':couleur_selle', $item['couleur_selle'], \PDO::PARAM_STR);
        $statement->bindValue(':prix_moto', $item['prix_moto'], \PDO::PARAM_INT);
        $statement->bindValue(':prix_retro', $item['prix_retro'], \PDO::PARAM_INT);
        $statement->bindValue(':prix_selle', $item['prix_selle'], \PDO::PARAM_INT);
        $statement->bindValue(":$customerId", $customerId, \PDO::PARAM_INT);
        $statement->execute();
        return (int)$this->pdo->lastInsertId();
    }
    public function showConfigById(string $customerId): array
    {
        $statement = $this->pdo->query("SELECT model.id as model_id,name_moto, couleur_moto,
         couleur_retro, couleur_selle, prix_moto, prix_retro, prix_selle from model
                join customer on model.customer_id = customer.id WHERE customer.id = $customerId ;");

        $list = $statement->fetchAll();
         return $list;
    }
}
