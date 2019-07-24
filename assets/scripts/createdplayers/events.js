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
  console.log(formData)
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

const addHandlers = () => {
  $('#show-createdplayer').on('click', onShowCreatedPlayer)
  $('#create-player').on('submit', onCreatePlayer)
  $('#update-player').on('submit', onUpdatePlayer)
}

module.exports = {
  addHandlers
}
