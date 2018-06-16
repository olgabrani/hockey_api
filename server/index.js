const express = require('express')
const bodyParser = require('body-parser')
const { Team, Player } = require('./sequelize')

const app = express()
app.use(bodyParser.json());

/*
* TEAM CALLS
*/


// Create a team
app.post('/api/teams', (req, res) => {
    console.log(`Create team with data ${JSON.stringify(req.body)}`)
    Team.create(req.body)
        .then(team => res.json(team))
})

// Get all teams
app.get('/api/teams', (req, res) => {
  console.log('Team list')
  Team.findAll().then(teams => res.json(teams))
})


// Get team's details
app.get('/api/teams/:teamId?', (req, res) => {
  console.log(`Requested team ${req.params.teamId}`)
  Team.findAll({
    where: {
      id: req.params.teamId
    }
  }).then(teams => res.json(teams[0]))
})

/*
* PLAYER CALLS
*/


// Create a player
app.post('/api/players', (req, res) => {
    console.log(`Create player with data ${JSON.stringify(req.body)}`)
    Player.create(req.body)
        .then(player => res.json(player))
})

// Get all players
app.get('/api/players', (req, res) => {
  console.log('Player list')
  Player.findAll().then(players => res.json(players))
})


// Get player's details
app.get('/api/players/:playerId?', (req, res) => {
  console.log(`Requested player ${req.params.playerId}`)
  Player.findAll({
    where: {
      id: req.params.playerId
    }
  }).then(players => res.json(players[0]))
})


const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})
