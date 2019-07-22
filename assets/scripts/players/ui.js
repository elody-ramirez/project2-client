'use strict'

// const store = require('../store')

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
  }, 4000)
}

const indexPlayersSuccessful = responseData => {
  successMessage(`Success`)
  clearMessaging()
}

const indexPlayersFailure = responseData => {
  failureMessage('This action was not successul')
  clearMessaging()
}

module.exports = {
  indexPlayersSuccessful,
  indexPlayersFailure

}
