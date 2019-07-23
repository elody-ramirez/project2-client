'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onIndexPlayers = event => {
  api.indexPlayers()
    .then(ui.indexPlayersSuccessful)
    .catch(ui.indexPlayersFailure)
}

const onGetPlayer = event => {
  $('.content').empty()
  let id = Math.floor((Math.random() * 150) + 1)
  api.getPlayer(id)
    .then(ui.getPlayerSuccessful)
    .catch(ui.getPlayerFailure)
  id = Math.floor((Math.random() * 150) + 1)
  api.getPlayer(id)
    .then(ui.getPlayerSuccessful)
    .catch(ui.getPlayerFailure)
  id = Math.floor((Math.random() * 150) + 1)
  api.getPlayer(id)
    .then(ui.getPlayerSuccessful)
    .catch(ui.getPlayerFailure)
}

const addHandlers = () => {
  $('#index-players').on('click', onIndexPlayers)
  $('#get-players').on('click', onGetPlayer)
}

module.exports = {
  addHandlers
}
