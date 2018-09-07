SELECT `account`.`id`,
    `account`.`username`,
    `account`.`email`,
    `account`.`created`
FROM `account`;

SELECT `contact`.`id`,
    `contact`.`email`,
    `contact`.`account_id`,
    `contact`.`created`
FROM `contact`;

SELECT `contact_message`.`id`,
    `contact_message`.`email`,
    `contact_message`.`reason`,
    `contact_message`.`comments`,
    `contact_message`.`created`
FROM `contact_message`;

SELECT `education`.`id`,
    `education`.`level`,
    `education`.`degree`,
    `education`.`focus`,
    `education`.`gpa`,
    `education`.`school`,
    `education`.`account_id`,
    `education`.`created`
FROM `education`;

SELECT `experience`.`id`,
    `experience`.`from`,
    `experience`.`to`,
    `experience`.`title`,
    `experience`.`company`,
    `experience`.`city`,
    `experience`.`state`,
    `experience`.`account_id`,
    `experience`.`created`
FROM `experience`;

SELECT `login`.`id`,
    `login`.`email`,
    `login`.`token`,
    `login`.`created`
FROM `login`;

SELECT `project`.`id`,
    `project`.`description`,
    `project`.`experience_id`,
    `project`.`created`
FROM `project`;

SELECT `resume`.`id`,
    `resume`.`call_to_action`,
    `resume`.`link`,
    `resume`.`account_id`,
    `resume`.`created`
FROM `resume`;

SELECT `site`.`id`,
    `site`.`title`,
    `site`.`is_scrollable`,
    `site`.`account_id`,
    `site`.`created`
FROM `site`;

SELECT `skill`.`id`,
    `skill`.`description`,
    `skill`.`experience_id`,
    `skill`.`created`
FROM `skill`;

SELECT `skillset`.`id`,
    `skillset`.`category`,
    `skillset`.`account_id`,
    `skillset`.`created`
FROM `skillset`;

SELECT `skillset_item`.`id`,
    `skillset_item`.`description`,
    `skillset_item`.`skillset_id`,
    `skillset_item`.`created`
FROM `skillset_item`;

SELECT `social_media`.`id`,
    `social_media`.`url`,
    `social_media`.`image`,
    `social_media`.`account_id`,
    `social_media`.`created`
FROM `social_media`;
