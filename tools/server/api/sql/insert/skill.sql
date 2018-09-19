INSERT INTO `skill`
(`description`,
`experience_id`)
VALUES
(?,?)
SELECT LAST_INSERT_ID();
