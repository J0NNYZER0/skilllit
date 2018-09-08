
INSERT INTO `project`
  (`id`,
  `description`,
  `experience_id`)
VALUES
  (?,?,?)
ON DUPLICATE KEY UPDATE
`description`=VALUES(`description`);
