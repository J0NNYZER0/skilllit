SELECT `id`,
  `avatar`,
  `selected_avatar`,
  `talk_bubble`,
  `title`,
  `tagline`,
  `account_id`,
  `created`
FROM `home`
WHERE `account_id` = ?;
