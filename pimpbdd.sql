-- MySQL Script generated by MySQL Workbench
-- Tue Apr 13 16:31:08 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projet` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema projet
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema projet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projet` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `projet` ;

-- -----------------------------------------------------
-- Table `projet`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projet`.`article`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet`.`article` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(55) NOT NULL,
  `description` TEXT NOT NULL,
  `quantityStock` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`, `category_id`),
  INDEX `fk_article_category1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_article_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `projet`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projet`.`color`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet`.`color` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `reference` VARCHAR(55) NOT NULL,
  `name` VARCHAR(55) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projet`.`model`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet`.`model` (
  `idtable1` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(55) NOT NULL,
  `reference` VARCHAR(55) NOT NULL,
  `defaultPrice` INT NOT NULL,
  `vat` INT NOT NULL,
  `totalPrice` INT NOT NULL,
  `article_id` INT NOT NULL,
  `color_id` INT NOT NULL,
  PRIMARY KEY (`idtable1`, `article_id`, `color_id`),
  INDEX `fk_model_article1_idx` (`article_id` ASC) VISIBLE,
  INDEX `fk_model_color1_idx` (`color_id` ASC) VISIBLE,
  CONSTRAINT `fk_model_article1`
    FOREIGN KEY (`article_id`)
    REFERENCES `projet`.`article` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_model_color1`
    FOREIGN KEY (`color_id`)
    REFERENCES `projet`.`color` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projet`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet`.`customer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lastName` VARCHAR(55) NOT NULL,
  `firstName` VARCHAR(55) NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `postalCode` INT NOT NULL,
  `city` VARCHAR(55) NOT NULL,
  `phoneNumber` INT NULL DEFAULT NULL,
  `mail` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `projet`.`motorbike`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet`.`motorbike` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `reference` VARCHAR(55) NOT NULL,
  `brand` VARCHAR(55) NOT NULL,
  `name` VARCHAR(55) NOT NULL,
  `description` TEXT NOT NULL,
  `defaultPrice` INT NOT NULL,
  `vat` INT NOT NULL,
  `totalPrice` INT NOT NULL,
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
  `customer_id` INT NOT NULL,
  `motorbike_id` INT NOT NULL,
  PRIMARY KEY (`id`, `customer_id`, `motorbike_id`),
  INDEX `fk_order_customer1_idx` (`customer_id` ASC) VISIBLE,
  INDEX `fk_order_motorbike1_idx` (`motorbike_id` ASC) VISIBLE,
  CONSTRAINT `fk_order_customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `projet`.`customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_motorbike1`
    FOREIGN KEY (`motorbike_id`)
    REFERENCES `projet`.`motorbike` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
  INDEX `fk_table1_article1_idx` (`article_id` ASC) VISIBLE,
  INDEX `fk_lignOrder_order1_idx` (`order_id` ASC) VISIBLE,
  CONSTRAINT `fk_table1_article1`
    FOREIGN KEY (`article_id`)
    REFERENCES `projet`.`article` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_lignOrder_order1`
    FOREIGN KEY (`order_id`)
    REFERENCES `projet`.`order` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `projet` ;

-- -----------------------------------------------------
-- Table `projet`.`motorbike_has_article`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projet`.`motorbike_has_article` (
  `motorbike_id` INT NOT NULL,
  `article_id` INT NOT NULL,
  PRIMARY KEY (`motorbike_id`, `article_id`),
  INDEX `fk_motorbike_has_article_article1_idx` (`article_id` ASC) VISIBLE,
  INDEX `fk_motorbike_has_article_motorbike_idx` (`motorbike_id` ASC) VISIBLE,
  CONSTRAINT `fk_motorbike_has_article_motorbike`
    FOREIGN KEY (`motorbike_id`)
    REFERENCES `projet`.`motorbike` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_motorbike_has_article_article1`
    FOREIGN KEY (`article_id`)
    REFERENCES `projet`.`article` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
