'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onShowCreatedPlayer = event => {
  api.showCreatedPlayer()
    .then(ui.showCreatedPlayerSuccessful)
    .catch(ui.showCreatedPlayerFailure)
}

const onCreatePlayer = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  formData.createdplayer['user_id'] = store.user.id
  api.createPlayer(formData)
    .then(ui.createPlayerSuccessful)
    .catch(ui.createPlayerFailure)
}

const onUpdatePlayer = event => {
  console.log('button')
  event.preventDefault()

  // const form = event.target
  // const formData = getFormFields(form)
  // api.updatePlayer(formData)
  //   .then(ui.createPlayerSuccessful)
  //   .catch(ui.createPlayerFailure)
}

const onDeletePlayer = event => {
  const createdPlayerId = store.user.createdplayers[0].id
  api.deletePlayer(createdPlayerId)
    .then(ui.deleteCreatedPlayerSuccessful)
    .catch(ui.deleteCreatedPlayerFailure)
}

const addHandlers = () => {
  $('#show-createdplayer').on('click', onShowCreatedPlayer)
  $('#create-player').on('submit', onCreatePlayer)
  $('#update-player').on('submit', onUpdatePlayer)
  $('#delete-player').on('click', onDeletePlayer)
}

module.exports = {
  addHandlers
}
