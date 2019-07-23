'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onIndexUserPlayers = event => {
  api.indexPlayers()
    .then(ui.indexPlayersSuccessful)
    .catch(ui.indexPlayersFailure)
}

const addHandlers = () => {
  $('#index-userplayers').on('click', onIndexUserPlayers)
  // $('body').on('click', '.add-Player', onAddPlayer)
}

module.exports = {
  addHandlers
}
