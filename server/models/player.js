module.exports = (sequelize, type) => {
  return sequelize.define('player', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: type.STRING,
    last_name: type.STRING,
    nickname: type.STRING,
    jersey: type.INTEGER
  })
}
