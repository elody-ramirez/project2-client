'use strict'

const store = require('../store')
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

const signUpSuccessful = responseData => {
  successMessage('You signed up successfully! Now Sign In!')
  clearMessaging()
}

const signUpFailure = () => {
  failureMessage('You failed to sign up! Try Again!')
  clearMessaging()
}

const signInSuccessful = responseData => {
  successMessage('You logged into your account!')
  store.user = responseData.user
  clearMessaging()
}

const signInFailure = () => {
  failureMessage("You weren't able to log in!")
  clearMessaging()
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure
}
