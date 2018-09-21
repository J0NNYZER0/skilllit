SELECT `account`.`id`,
    `account`.`username`,
    `account`.`email`,
    `account`.`created`
FROM `account`
WHERE `account`.`email` = ?;
