'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // $('#sign-up-modal').modal('toggle')
  api.signUp(formData)
    .then(() => {
      onSignIn(event)
    })
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // $('#sign-in-modal').modal('toggle')
  api.signIn(formData)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // $('#change-pw-modal').modal('toggle')
  api.changePassword(formData)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('body').on('submit', '#sign-up', onSignUp)
  $('body').on('submit', '#sign-in', onSignIn)
  $('body').on('submit', '#change-password', onChangePassword)
  $('body').on('click', '#sign-out', onSignOut)
}

module.exports = {
  addHandlers
}
