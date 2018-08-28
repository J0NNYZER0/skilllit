export const EMAIL = /^(?=.*[0-9])[0-9]{3,16}$/,
  PASSWORD = /^(?=.*[0-9])[0-9]{3,16}$/,
  PHONE = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/,
  REQUIRED = /[0-9a-zA-Z-,]+/,
  MIN = min => new RegExp("^.{" + min + ",}$"),
  MAX = max => new RegExp("^.{1," + max + "}$"),
  MINMAX = (min,max) => new RegExp("^.{" + min + "," + max + "}$");
