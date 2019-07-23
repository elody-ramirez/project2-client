'use strict'

const api = require('./api')
const ui = require('./ui')

const onIndexUserPlayers = event => {
  api.indexUserPlayers()
    .then(ui.indexUserPlayersSuccessful)
    .catch(ui.indexUserPlayersFailure)
}

const onAddUserPlayer = event => {
  const playerId = $(event.target).data('id')
  api.addUserPlayer(playerId)
    .then(ui.addUserPlayerSuccessful)
    .catch(ui.addUserPlayerFailure)
}

const addHandlers = () => {
  $('#index-userplayers').on('click', onIndexUserPlayers)
  $('body').on('click', '.add-Player', onAddUserPlayer)
}

module.exports = {
  addHandlers
}
