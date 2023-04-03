-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema golfdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `golfdb` ;

-- -----------------------------------------------------
-- Schema golfdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `golfdb` DEFAULT CHARACTER SET utf8 ;
USE `golfdb` ;

-- -----------------------------------------------------
-- Table `round`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `round` ;

CREATE TABLE IF NOT EXISTS `round` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `start` TIME NOT NULL,
  `end` TIME NOT NULL,
  `notes` VARCHAR(45) NULL,
  `holes_played` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hole_played`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hole_played` ;

CREATE TABLE IF NOT EXISTS `hole_played` (
  `round_id` INT NOT NULL,
  `hole_number` INT NULL,
  `strokes` INT NULL,
  INDEX `fk_hole_played_round_idx` (`round_id` ASC),
  CONSTRAINT `fk_hole_played_round`
    FOREIGN KEY (`round_id`)
    REFERENCES `round` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS jk@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'jk'@'localhost' IDENTIFIED BY 'jk';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'jk'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `round`
-- -----------------------------------------------------
START TRANSACTION;
USE `golfdb`;
INSERT INTO `round` (`id`, `date`, `start`, `end`, `notes`, `holes_played`) VALUES (1, '2022-04-02', '11:00', '16:00', NULL, 18);

COMMIT;

