
INSERT INTO `experience`
  (`id`,
  `from`,
  `to`,
  `title`,
  `company`,
  `city`,
  `state`,
  `account_id`)
VALUES
  (?,?,?,?,?,?,?,?)
ON DUPLICATE KEY UPDATE
`from`=VALUES(`from`),
`to`=VALUES(`to`),
`title`=VALUES(`title`),
`company`=VALUES(`company`),
`city`=VALUES(`city`),
`state`=VALUES(`state`);
