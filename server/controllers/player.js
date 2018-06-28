const { Player } = require('../sequelize')


// Create player
exports.create_player = function(req, res) {
  Player.create(req.body)
    .then(instance => res.json(instance))
}

// Get the details of a player
exports.player_details = function(req, res ) {
  console.log(`Requested player ${req.params.playerId}`)
  Player.findAll({
    where: {
      id: req.params.playerId
    }
  }).then(list => res.json(list[0]))
}

// List all players
exports.list_players = function(req, res) {
  console.log('Player list')
  Player.findAll().then(list => res.json(list))
}
