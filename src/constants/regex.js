export const EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD = /^(?=.*[0-9])(?=.*[!@#$%^&*+)(-)])[a-zA-Z0-9!@#$%^&*+)(-]{6,16}$/,
  PHONE = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/,
  REQUIRED = /[0-9a-zA-Z-,]+/,
  MIN = min => new RegExp("^.{" + min + ",}$"),
  MAX = max => new RegExp("^.{1," + max + "}$"),
  MINMAX = (min,max) => new RegExp("^.{" + min + "," + max + "}$");

//PASSWORD - requires a combination of at least six numbers, letters and special characters,
