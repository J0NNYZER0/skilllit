'use strict'

import source from 'shell-source';

source(__dirname + '/../../../../../.env.sh', function(err) {

  if (err) {
    console.log('Missing CLEARDB_DATABASE_URL ENV variable');
    console.log('Missing NODE_MODULES_CACHE ENV variable');
    return console.error(err)
  } else {
    console.log('CLEARDB_DATABASE_URL', process.env.CLEARDB_DATABASE_URL);
    console.log('NODE_MODULES_CACHE', process.env.NODE_MODULES_CACHE);

    const Mysql = require('mysql'),
    Url = require('url'),
    ParsedConnStr = Url.parse(process.env.CLEARDB_DATABASE_URL),
    MysqlPool = Mysql.createPool({
      host     : ParsedConnStr.host,
      user     : ParsedConnStr.auth.split(':')[0],
      password : ParsedConnStr.auth.split(':')[1],
      database : ParsedConnStr.pathname.substring(1)
    })
    
    module.exports = {
      MysqlPool: MysqlPool
    }
  }

});

console.log('process.env.CLEARDB_DATABASE_URL')
console.log(process.env.CLEARDB_DATABASE_URL)
