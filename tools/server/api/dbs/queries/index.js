'use strict'

const Mysql = require('mysql'),
  MysqlPool = require('../connections').MysqlPool,
  ReadSqlFile = require('../../../utilities').ReadFileAsync,
  FormatSql = (sql, values) => {

    if (values) {
      let parsed = JSON.parse(values)
      if (typeof parsed === 'object')
        parsed = Object.values(parsed)
      sql = Mysql.format(sql, parsed)
    }

    return sql
  }

module.exports = {
  Mysql: (pathToSqlFile, values) => new Promise ((resolve, reject) => MysqlPool
    .getConnection((err, connection) => {

      if (err) reject(err) // not connected!

      const sql = FormatSql(ReadSqlFile(pathToSqlFile), values)

      return connection.query(sql, (error, results) => {
        console.log('results', results)// When done with the connection, release it.
        connection.release()

        if (error) reject(error)
        // Handle error after the release.

        resolve(results)

        // Don't use the connection here, it has been returned to the pool.
      })
    }))
}
