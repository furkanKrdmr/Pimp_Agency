-- MySQL Script generated by MySQL Workbench
-- mer. 28 avril 2021 11:51:45 CEST
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema projet
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema projet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projet` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `projet` ;

-- -----------------------------------------------------
-- Table `projet`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet`.`customer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lastname` VARCHAR(55) NOT NULL,
  `firstname` VARCHAR(55) NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `postal_code` INT NOT NULL,
  `city` VARCHAR(55) NOT NULL,
  `phone_number` INT NULL DEFAULT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projet`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet`.`order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `numero` INT NOT NULL,
  `motorbike_id` INT NOT NULL,
  PRIMARY KEY (`id`, `motorbike_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projet`.`lignOrder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet`.`lignOrder` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantityLign` INT NOT NULL,
  `article_id` INT NOT NULL,
  `order_id` INT NOT NULL,
  PRIMARY KEY (`id`, `article_id`, `order_id`),
  INDEX `fk_lignOrder_order1_idx` (`order_id` ASC) VISIBLE,
  CONSTRAINT `fk_lignOrder_order1`
    FOREIGN KEY (`order_id`)
    REFERENCES `projet`.`order` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projet`.`model`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet`.`model` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name_moto` VARCHAR(55) NOT NULL,
  `couleur_moto` VARCHAR(55) NOT NULL,
  `couleur_retro` VARCHAR(20) NOT NULL,
  `couleur_selle` VARCHAR(20) NOT NULL,
  `prix_moto` INT NOT NULL,
  `prix_retro` INT NOT NULL,
  `prix_sellle` INT NOT NULL,
  `customer_id` INT NOT NULL,
  PRIMARY KEY (`id`, `customer_id`),
  INDEX `fk_model_customer1_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `fk_model_customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `projet`.`customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;