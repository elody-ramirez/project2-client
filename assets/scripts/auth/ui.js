'use strict'

// const store = require('../store')
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
    // $('#message').text('')
    $('.message1').hide()
    $('.messsage2').hide()
  }, 3000)
}

const signUpSuccessful = responseData => {
  successMessage('You signed up successfully! Now Sign In!')
  clearMessaging()
}

const signUpFailure = () => {
  failureMessage('You failed to sign up! Try Again!')
  clearMessaging()
}

module.exports = {
  signUpSuccessful,
  signUpFailure
}
