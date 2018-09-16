INSERT INTO `project`
(`description`,
`experience_id`)
VALUES
(?,?)
SELECT LAST_INSERT_ID();
