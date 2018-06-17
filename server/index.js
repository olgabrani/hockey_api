const express = require('express')
const bodyParser = require('body-parser')
const team_controller = require('./controllers/team')
const player_controller = require('./controllers/player')

const app = express()
app.use(bodyParser.json());



// Team routes
app.post('/api/teams', team_controller.create_team)
app.get('/api/teams/:teamId?', team_controller.team_details)
app.get('/api/teams', team_controller.list_teams)

// Player routes
app.post('/api/players', player_controller.create_player)
app.get('/api/players/:playerId?', player_controller.player_details)
app.get('/api/players', player_controller.list_players)



const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})
