SELECT `experience`.`id`,
    `experience`.`from`,
    `experience`.`to`,
    `experience`.`title`,
    `experience`.`company`,
    `experience`.`city`,
    `experience`.`state`,
    `experience`.`account_id`,
    `experience`.`created`
FROM `experience`
WHERE `account_id` = ?;
