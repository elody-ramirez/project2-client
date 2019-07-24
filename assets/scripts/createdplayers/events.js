'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onMyPlayer = event => {
  ui.myPlayerSuccessful()
  // ui.myPlayerFailure()
}

const onShowCreatedPlayer = event => {
  api.showCreatedPlayer()
    .then(ui.showCreatedPlayerSuccessful)
    .catch(ui.showCreatedPlayerFailure)
}

const onCreatePlayer = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  $('#create-player-modal').modal('toggle')
  api.createPlayer(formData)
    .then(ui.createPlayerSuccessful)
    .catch(ui.createPlayerFailure)
}

const onUpdatePlayer = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  $('#update-player-modal').modal('toggle')
  api.updatePlayer(formData)
    .then(ui.updateCreatedPlayerSuccessful)
    .catch(ui.updateCreatedPlayerFailure)
}

const onDeletePlayer = event => {
  api.deletePlayer(store.createdPlayerId)
    .then(ui.deleteCreatedPlayerSuccessful)
    .catch(ui.deleteCreatedPlayerFailure)
}

const onMyPlayerBack = event => {
  ui.myPlayerBackSuccessful()
  // ui.myPlayerFailure()
}

const addHandlers = () => {
  $('body').on('click', '#myplayer', onMyPlayer)
  $('body').on('click', '#show-createdplayer', onShowCreatedPlayer)
  $('body').on('submit', '#create-player', onCreatePlayer)
  $('body').on('submit', '#update-player', onUpdatePlayer)
  $('body').on('click', '#delete-player', onDeletePlayer)
  $('body').on('click', '#myplayer-back', onMyPlayerBack)
}

module.exports = {
  addHandlers
}
