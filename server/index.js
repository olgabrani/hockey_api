const express = require('express')
const bodyParser = require('body-parser')
const team_controller = require('./controllers/team')
const player_controller = require('./controllers/player')
const config = require('../config');


const port =  process.env.PORT || config.port || 3000
const api_prefix =  process.env.API_PREFIX || config.api_prefix || 'api'

const app = express()
app.use(bodyParser.json());


// Team routes
app.post(`/${api_prefix}/teams`, team_controller.create_team)
app.get(`/${api_prefix}/teams`, team_controller.list_teams)
app.get(`/${api_prefix}/teams/:teamId?`, team_controller.team_details)

// Player routes
app.post(`/${api_prefix}/players`, player_controller.create_player)
app.get(`/${api_prefix}/players`, player_controller.list_players)
app.get(`/${api_prefix}/players/:teamId?`, player_controller.player_details)



app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
