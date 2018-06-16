const Sequelize = require('sequelize')
const TeamModel = require('./models/team')
const PlayerModel = require('./models/player')

const sequelize = new Sequelize('hockey_api', 'root', 'root', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './hockey.db',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Team = TeamModel(sequelize, Sequelize)
const Player = PlayerModel(sequelize, Sequelize)

sequelize.sync()
  .then(() => {
    console.log(`Database ready`)
  })

module.exports = {
  Team,
  Player
}
