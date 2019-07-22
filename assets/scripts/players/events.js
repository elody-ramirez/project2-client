'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onIndexPlayers = event => {
  api.indexPlayers()
    .then(ui.indexPlayersSuccessful)
    .catch(ui.indexPlayersFailure)
}

const addHandlers = () => {
  $('#index-players').on('click', onIndexPlayers)
}

module.exports = {
  addHandlers
}
