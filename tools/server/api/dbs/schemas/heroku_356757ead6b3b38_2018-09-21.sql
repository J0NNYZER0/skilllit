# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: us-cdbr-iron-east-01.cleardb.net (MySQL 5.5.56-log)
# Database: heroku_356757ead6b3b38
# Generation Time: 2018-09-21 17:58:59 +0000
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

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;

INSERT INTO `account` (`id`, `username`, `email`, `created`)
VALUES
	(1,'Jon','jon.ortiz@me.com','2018-09-06 19:35:59'),
	(41,'','jon.ortiz@me.commm','2018-09-21 17:13:15');

/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;


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
  UNIQUE KEY `experience_unq_1` (`id`,`account_id`),
  KEY `experience_ibfk_1` (`account_id`),
  CONSTRAINT `experience_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `experience` WRITE;
/*!40000 ALTER TABLE `experience` DISABLE KEYS */;

INSERT INTO `experience` (`id`, `from`, `to`, `title`, `company`, `city`, `state`, `account_id`, `created`)
VALUES
	(311,'2000','2010','Software Engineer','Some Company','Somewhere','CA',1,'2018-09-19 07:16:18');

/*!40000 ALTER TABLE `experience` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table home
# ------------------------------------------------------------

DROP TABLE IF EXISTS `home`;

CREATE TABLE `home` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar` text,
  `selected_avatar` text,
  `talk_bubble` text,
  `title` tinytext,
  `tagline` tinytext,
  `account_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `home_unq_1` (`account_id`),
  CONSTRAINT `home_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `home` WRITE;
/*!40000 ALTER TABLE `home` DISABLE KEYS */;

INSERT INTO `home` (`id`, `avatar`, `selected_avatar`, `talk_bubble`, `title`, `tagline`, `account_id`, `created`)
VALUES
	(1,'https://s3.us-east-2.amazonaws.com/jonortiz.me/me2.png','https://s3.us-east-2.amazonaws.com/jonortiz.me/me.png','<b>Hi, I\'m stupid</b>, the author of Skilllit. I hope you enjoy your experience here.','Add a Title','Pushing &nbsp;<b>UI</b>s &nbsp;<b>API</b>s and&nbsp; <b>DB</b>s to the edge of technology.<br />  Empowering people to manage, protect and understand data.',1,'2018-09-06 23:28:18');

/*!40000 ALTER TABLE `home` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table login
# ------------------------------------------------------------

DROP TABLE IF EXISTS `login`;

CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `short_id` varchar(25) NOT NULL,
  `email` varchar(245) NOT NULL DEFAULT '',
  `token` varchar(255) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;

INSERT INTO `login` (`id`, `short_id`, `email`, `token`, `created`)
VALUES
	(51,'','jon.ortiz@me.comm','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbW0iLCJpcCI6IjEyNy4wLjAuMSJ9LCJpYXQiOjE1Mzc1MDY1MzZ9.rIXwDcsezPcFMPF31YfE1CP8ge3exQXH1RC9vaZ2M20','2018-09-21 05:08:58'),
	(61,'','jon.ortiz@me.comm','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbW0iLCJpcCI6IjEyNy4wLjAuMSJ9LCJpYXQiOjE1Mzc1MDY3NTd9.G9-y4sC5hSa-of5m6tDER0mjfwXKi_eQlINtu9npMAU','2018-09-21 05:12:38'),
	(71,'','jon.ortiz@me.comm','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbW0iLCJpcCI6IjEyNy4wLjAuMSJ9LCJpYXQiOjE1Mzc1MDgxOTF9.i6oig--rpl7Uo46hu-wDa5vh3GgY_eWxwuEFsGhbJek','2018-09-21 05:36:32'),
	(81,'','jon.ortiz@me.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbSIsImlwIjoiMTI3LjAuMC4xIn0sImlhdCI6MTUzNzUwODE5Mn0.2UJpfstc3b7DK9MXu-4TsUlkyGpo0BAID3GtHQlb9SQ','2018-09-21 05:36:33'),
	(91,'','jon.ortiz@me.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbSIsImlwIjoiMTAuMTAxLjI1My4xNDEifSwiaWF0IjoxNTM3NTA5ODQ5fQ.vPO46VVysBYD2IVFoaPktQska7MssYxeQdTZ4g1811s','2018-09-21 06:04:10'),
	(101,'','jon.ortiz@me.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbSIsImlwIjoiMTI3LjAuMC4xIn0sImlhdCI6MTUzNzU0OTA3MH0.18hoCx9d_RS9I7bITajQyOuLwhAnoplNCvuk4Z6OGjA','2018-09-21 16:57:51'),
	(111,'','jon.ortiz@me.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbSIsImlwIjoiMTI3LjAuMC4xIn0sImlhdCI6MTUzNzU0OTEwMX0.TsLAElfgjAKQgbNbJC85DSeQDuzFbfvzEpeJEzOwUS4','2018-09-21 16:58:22'),
	(121,'','jon.ortiz@me.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbSIsImlwIjoiMTI3LjAuMC4xIn0sImlhdCI6MTUzNzU0OTEyNn0.dL_2djXRhHJifefcVlvyvZkXN8bEvxnaOS3ZULJT9sU','2018-09-21 16:58:47'),
	(131,'','jon.ortiz@me.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbSIsImlwIjoiMTI3LjAuMC4xIn0sImlhdCI6MTUzNzU0OTEyNn0.dL_2djXRhHJifefcVlvyvZkXN8bEvxnaOS3ZULJT9sU','2018-09-21 16:58:47'),
	(141,'','jon.ortiz@me.commm','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbW1tIiwiaXAiOiIxMjcuMC4wLjEifSwiaWF0IjoxNTM3NTQ5MTc2fQ.YQHs_abSEQY8BBCy8P90m2GXLe9cBjEz20WprrfwihA','2018-09-21 16:59:37'),
	(151,'','jon.ortiz@me.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbSIsImlwIjoiMTI3LjAuMC4xIn0sImlhdCI6MTUzNzU0OTM1OX0.yhvvM4KwoSBAxSvTFHyNjEb7gYfZdBauW76SluyrzFQ','2018-09-21 17:02:41'),
	(161,'','jon.ortiz@me.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbSIsImlwIjoiMTI3LjAuMC4xIn0sImlhdCI6MTUzNzU0OTQxMX0.nFtt1CuDz9sN5lWuj_N4WRHQdKdoNV5upNzy6ASWcWk','2018-09-21 17:03:33'),
	(171,'','jon.ortiz@me.commm','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbW1tIiwiaXAiOiIxMjcuMC4wLjEifSwiaWF0IjoxNTM3NTQ5OTkzfQ.DRu4ASzPlqawl9XKQTuICHXC6OwUra-QbI3wi9X3nCs','2018-09-21 17:13:15'),
	(181,'','jon.ortiz@me.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbSIsImlwIjoiMTI3LjAuMC4xIn0sImlhdCI6MTUzNzU1MDAxMX0.A1_YIzhuX-IRESJz7gMrazuQjTDdA8DaMrO_MZpSwDY','2018-09-21 17:13:32'),
	(191,'','jon.ortiz@me.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9uLm9ydGl6QG1lLmNvbSIsImlwIjoiMTI3LjAuMC4xIn0sImlhdCI6MTUzNzU1MDE0OX0.nRu24ihtG7HmAh-g9Z13Q12mF4EgAK7JWt-40NLk6jA','2018-09-21 17:15:50');

/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table project
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text NOT NULL,
  `experience_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `project_unq_1` (`id`,`experience_id`),
  KEY `project_ibfk_1` (`experience_id`),
  CONSTRAINT `project_ibfk_1` FOREIGN KEY (`experience_id`) REFERENCES `experience` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;

INSERT INTO `project` (`id`, `description`, `experience_id`, `created`)
VALUES
	(901,'Project 1',311,'2018-09-19 07:18:10');

/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;


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
  `description` text NOT NULL,
  `experience_id` int(11) NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `skill_unq_1` (`id`,`experience_id`),
  KEY `skill_ibfk_1` (`experience_id`),
  CONSTRAINT `skill_ibfk_1` FOREIGN KEY (`experience_id`) REFERENCES `experience` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;

INSERT INTO `skill` (`id`, `description`, `experience_id`, `created`)
VALUES
	(151,'Skill 1',311,'2018-09-19 07:18:15');

/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;


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
