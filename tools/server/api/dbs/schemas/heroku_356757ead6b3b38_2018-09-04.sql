# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: us-cdbr-iron-east-01.cleardb.net (MySQL 5.5.56-log)
# Database: heroku_356757ead6b3b38
# Generation Time: 2018-09-05 01:49:34 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table account
# ------------------------------------------------------------

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(245) NOT NULL DEFAULT '',
  `email` varchar(245) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table contact
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contact`;

CREATE TABLE `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(245) NOT NULL DEFAULT '',
  `account_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `contact_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table contact_message
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contact_message`;

CREATE TABLE `contact_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(245) NOT NULL DEFAULT '',
  `reason` varchar(35) NOT NULL DEFAULT '',
  `comments` varchar(500) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table education
# ------------------------------------------------------------

DROP TABLE IF EXISTS `education`;

CREATE TABLE `education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` tinytext NOT NULL,
  `degree` tinytext NOT NULL,
  `focus` tinytext NOT NULL,
  `gpa` tinytext NOT NULL,
  `school` tinytext NOT NULL,
  `account_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `education_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table experience
# ------------------------------------------------------------

DROP TABLE IF EXISTS `experience`;

CREATE TABLE `experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from` tinytext NOT NULL,
  `to` tinytext,
  `title` tinytext NOT NULL,
  `company` tinytext NOT NULL,
  `city` tinytext NOT NULL,
  `state` tinytext NOT NULL,
  `account_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `experience_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table home
# ------------------------------------------------------------

DROP TABLE IF EXISTS `home`;

CREATE TABLE `home` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `section` tinytext,
  `avatar` text,
  `selected_avatar` text,
  `talk_bubble` text,
  `title` tinytext,
  `tagline` tinytext,
  `account_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `home_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table login
# ------------------------------------------------------------

DROP TABLE IF EXISTS `login`;

CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(245) NOT NULL DEFAULT '',
  `token` varchar(255) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table project
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text NOT NULL,
  `experience_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `experience_id` (`experience_id`),
  CONSTRAINT `project_ibfk_1` FOREIGN KEY (`experience_id`) REFERENCES `experience` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table resume
# ------------------------------------------------------------

DROP TABLE IF EXISTS `resume`;

CREATE TABLE `resume` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `call_to_action` tinytext,
  `link` int(11) DEFAULT NULL,
  `account_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `resume_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table site
# ------------------------------------------------------------

DROP TABLE IF EXISTS `site`;

CREATE TABLE `site` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` tinytext NOT NULL,
  `is_scrollable` tinyint(1) NOT NULL DEFAULT '1',
  `account_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `site_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table skill
# ------------------------------------------------------------

DROP TABLE IF EXISTS `skill`;

CREATE TABLE `skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text,
  `experience_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `experience_id` (`experience_id`),
  CONSTRAINT `skill_ibfk_1` FOREIGN KEY (`experience_id`) REFERENCES `experience` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table skillset
# ------------------------------------------------------------

DROP TABLE IF EXISTS `skillset`;

CREATE TABLE `skillset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` tinytext,
  `account_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `skillset_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table skillset_item
# ------------------------------------------------------------

DROP TABLE IF EXISTS `skillset_item`;

CREATE TABLE `skillset_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` tinytext,
  `skillset_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `skillset_id` (`skillset_id`),
  CONSTRAINT `skillset_item_ibfk_1` FOREIGN KEY (`skillset_id`) REFERENCES `skillset` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table social_media
# ------------------------------------------------------------

DROP TABLE IF EXISTS `social_media`;

CREATE TABLE `social_media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` text,
  `image` text,
  `account_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `social_media_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
