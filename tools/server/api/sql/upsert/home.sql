
INSERT INTO `home`
  (`avatar`,
  `selected_avatar`,
  `talk_bubble`,
  `title`,
  `tagline`,
  `account_id`)
VALUES
  (?,?,?,?,?,?)
ON DUPLICATE KEY UPDATE
  `avatar`=VALUES(`avatar`),
  `selected_avatar`=VALUES(`selected_avatar`),
  `talk_bubble`=VALUES(`talk_bubble`),
  `title`=VALUES(`title`),
  `tagline`=VALUES(`tagline`),
  `account_id`=VALUES(`account_id`);
