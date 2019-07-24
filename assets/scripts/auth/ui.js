'use strict'

const store = require('../store')
const signInTemplate = require('../templates/sign-in.handlebars')
const signOutTemplate = require('../templates/sign-out.handlebars')

const successMessage = message => {
  $('.message').text(message)
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('.message').text(message)
  $('form').trigger('reset')
}

const clearMessaging = function () {
  setTimeout(function () {
    $('.message').text('')
  }, 5000)
}

const signUpFailure = () => {
  failureMessage('You failed to sign up! Try Again!')
  clearMessaging()
}

const signInSuccessful = responseData => {
  // 2. Use the template file as a function
  // 3. Pass the template file an object as an argument
  // 4. Will return an interpolated HTML string
  const signInHtml = signInTemplate()
  // 5. Insert HTML string onto the page using jQuery
  // use .append or .html
  $('main').html(signInHtml)
  store.user = responseData.user
  const createdPlayer = store.user.createdplayers
  if (createdPlayer.length !== 0) {
    store.createdPlayerId = createdPlayer[0].id
  } else {
    store.createdPlayerId = 0
  }
  successMessage('You logged into your account!')
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

const signOutSuccessful = responseData => {
  // 2. Use the template file as a function
  // 3. Pass the template file an object as an argument
  // 4. Will return an interpolated HTML string
  const signOutHtml = signOutTemplate()
  // 5. Insert HTML string onto the page using jQuery
  // use .append or .html
  $('main').html(signOutHtml)
  successMessage('You have successfully logged out!')
  clearMessaging()
}

const signOutFailure = () => {
  failureMessage('You were unable to log out')
  clearMessaging()
}

module.exports = {
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure
}
