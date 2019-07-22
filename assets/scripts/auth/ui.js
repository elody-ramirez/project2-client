'use strict'

const store = require('../store')
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
  // 2. Use the template file as a function
  // 3. Pass the template file an object as an argument
  // 4. Will return an interpolated HTML string
  // const signInHtml = signInTemplate({ })
  // 5. Insert HTML string onto the page using jQuery
  // use .append or .html
  // $('.content').html(signInHtml)
  store.user = responseData.user
  clearMessaging()
}

const signInFailure = () => {
  failureMessage("You weren't able to log in!")
  clearMessaging()
}

const changePasswordSuccessful = responseData => {
  successMessage('You successfully changed your password!')
  clearMessaging()
}

const changePasswordFailure = () => {
  failureMessage('You were not able to change your password!')
  clearMessaging()
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure
}
