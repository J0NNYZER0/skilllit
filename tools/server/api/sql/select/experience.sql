SELECT * FROM (
  SELECT DISTINCT `experience`.`id`,
    `experience`.`from`,
    `experience`.`to`,
    `experience`.`title`,
    `experience`.`company`,
    `experience`.`city`,
    `experience`.`state`,
    `experience`.`account_id`,
    `experience`.`created`,
	GROUP_CONCAT(
    DISTINCT 'id:',`project`.`id`, '####', 'description:', `project`.`description`, '####',
    'experience_id:', `experience`.`id`, '####', 'created:', `project`.`created` SEPARATOR '----') AS `projects`,
    GROUP_CONCAT(
      DISTINCT 'id:',`skill`.`id`, '####', 'description:', `skill`.`description`, '####',
    'experience_id:', `experience`.`id`, '####', 'created:', `skill`.`created` SEPARATOR '----') AS `skills`
FROM `experience`
LEFT JOIN `project` ON
`experience`.`id` = `project`.`experience_id`
LEFT JOIN `skill` ON
`experience`.`id` = `skill`.`experience_id`
GROUP BY `experience`.`id`) AS `test`
WHERE `test`.`account_id` = ?;
