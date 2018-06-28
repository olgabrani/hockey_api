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
// A Player can belong to a lot of Teams
const PlayerTeam = sequelize.define('player_team', {})

Player.belongsToMany(Team, { through: PlayerTeam, unique: false })
Team.belongsToMany(Player, { through: PlayerTeam, unique: false })

sequelize.sync()
  .then(() => {
    console.log(`Database ready`)
  })

module.exports = {
  Team,
  Player
}
