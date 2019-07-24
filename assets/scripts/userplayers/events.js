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

const onRemoveUserPlayer = event => {
  const userPlayerId = $(event.target).closest('section').data('jointid')
  api.removeUserPlayer(userPlayerId)
    .then(ui.removeUserPlayerSuccessful)
    .catch(ui.removeUserPlayerFailure)
}

const addHandlers = () => {
  $('body').on('click', '#index-userplayers', onIndexUserPlayers)
  $('body').on('click', '.add-Player', onAddUserPlayer)
  $('body').on('click', '.remove-Player', onRemoveUserPlayer)
}

module.exports = {
  addHandlers
}
