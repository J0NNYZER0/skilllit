SELECT `skill`.`id`,
    `skill`.`description`,
    `skill`.`experience_id`,
    `skill`.`created`
FROM `skill`
WHERE `experience_id` = ?;
