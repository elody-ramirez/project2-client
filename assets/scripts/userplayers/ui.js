'use strict'

// const store = require('../store')
// const signInTemplate = require('../templates/signed-in.handlebars')
// const api = require('./api')

const successMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const clearMessaging = function () {
  setTimeout(function () {
    $('#message').text('')
  }, 5000)
}

const addUserPlayerSuccessful = responseData => {
  console.log('success')
  console.log(responseData)
  // successMessage('You logged into your account!')
  // clearMessaging()
}

const addUserPlayerFailure = () => {
  failureMessage("You can't add this player")
  clearMessaging()
}

module.exports = {
  addUserPlayerSuccessful,
  addUserPlayerFailure
}
