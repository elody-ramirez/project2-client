'use strict'

const store = require('../store')
const myPlayerTemplate = require('../templates/myplayer.handlebars')
const getCreatedPlayerTemplate = require('../templates/get-createdplayer.handlebars')
const signInTemplate = require('../templates/sign-in.handlebars')

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
  }, 4000)
}

const myPlayerSuccessful = responseData => {
  // 2. Use the template file as a function
  // 3. Pass the template file an object as an argument
  // 4. Will return an interpolated HTML string
  const myPlayerHtml = myPlayerTemplate()
  // 5. Insert HTML string onto the page using jQuery
  // use .append or .html
  $('main').html(myPlayerHtml)
}

const myPlayerFailure = responseData => {
  failureMessage('This action was not successul')
  clearMessaging()
}

const showCreatedPlayerSuccessful = responseData => {
  // 2. Use the template file as a function
  // 3. Pass the template file an object as an argument
  // 4. Will return an interpolated HTML string
  const getCreatedPlayerHtml = getCreatedPlayerTemplate({ createdplayer: responseData.createdplayer })
  // 5. Insert HTML string onto the page using jQuery
  // use .append or .html
  $('.content').html(getCreatedPlayerHtml)
}

const showCreatedPlayerFailure = responseData => {
  failureMessage('This action was not successul')
  clearMessaging()
}

const createPlayerSuccessful = responseData => {
  store.createdPlayerId = responseData.createdplayer.id
  $('.content').empty()
  successMessage('You created your own player!')
  clearMessaging()
}

const createPlayerFailure = () => {
  failureMessage('You were not able to make this player')
  clearMessaging()
}

const deleteCreatedPlayerSuccessful = responseData => {
  store.createdPlayerId = 0
  $('.content').empty()
  successMessage('You delete your created player!')
  clearMessaging()
}

const deleteCreatedPlayerFailure = () => {
  failureMessage("You don't have a created player to delete")
  clearMessaging()
}

const updateCreatedPlayerSuccessful = responseData => {
  $('.content').empty()
  successMessage('You updated your created player!')
  clearMessaging()
}

const updateCreatedPlayerFailure = () => {
  failureMessage("You don't have a created player to update")
  clearMessaging()
}

const myPlayerBackSuccessful = responseData => {
  // 2. Use the template file as a function
  // 3. Pass the template file an object as an argument
  // 4. Will return an interpolated HTML string
  const signInHtml = signInTemplate()
  // 5. Insert HTML string onto the page using jQuery
  // use .append or .html
  $('main').html(signInHtml)
}

const myPlayerBackFailure = responseData => {
  failureMessage('This action was not successul')
  clearMessaging()
}

module.exports = {
  myPlayerSuccessful,
  myPlayerFailure,
  showCreatedPlayerSuccessful,
  showCreatedPlayerFailure,
  createPlayerSuccessful,
  createPlayerFailure,
  deleteCreatedPlayerSuccessful,
  deleteCreatedPlayerFailure,
  updateCreatedPlayerSuccessful,
  updateCreatedPlayerFailure,
  myPlayerBackSuccessful,
  myPlayerBackFailure
}
