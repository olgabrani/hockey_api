const { Team, Player } = require('../sequelize')


// Create team
exports.create_team = function(req, res) {
  Team.create(req.body)
    .then(instance => res.json(instance))
}

// Get the details of a team
exports.team_details = function(req, res ) {
  console.log(`Requested team ${req.params.teamId}`)
  Team.findAll({
    where: {
      id: req.params.teamId
    },
  include: [{
    model: Player,
    through: {
      attributes: [],
    }
  }]
  }).then(list => res.json(list[0]))
}

// List all teams
exports.list_teams = function(req, res) {
  console.log('Team list')
  Team.findAll().then(list => res.json(list))
}
