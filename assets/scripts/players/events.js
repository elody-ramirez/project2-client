'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

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

const onCreatePlayer = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  formData.player['created_by'] = store.user.id
  console.log(formData)
  api.createPlayer(formData)
    .then(ui.createPlayerSuccessful)
    .catch(ui.createPlayerFailure)
}

const onUpdatePlayer = event => {
  event.preventDefault()

  // const form = event.target
  // const formData = getFormFields(form)
  // api.updatePlayer(formData)
  //   .then(ui.createPlayerSuccessful)
  //   .catch(ui.createPlayerFailure)
}

const addHandlers = () => {
  $('#index-players').on('click', onIndexPlayers)
  $('#get-players').on('click', onGetPlayer)
  $('#show-myplayer').on('click', onShowMyPlayer)
  $('#create-player').on('submit', onCreatePlayer)
  $('#update-player').on('submit', onUpdatePlayer)
}

module.exports = {
  addHandlers
}
