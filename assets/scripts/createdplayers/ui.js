'use strict'

const store = require('../store')
const showPlayersTemplate = require('../templates/players-listing.handlebars')
const getPlayerTemplate = require('../templates/get-player.handlebars')

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

const showCreatedPlayerSuccessful = responseData => {
  console.log('success')
  console.log(responseData)
  // // 2. Use the template file as a function
  // // 3. Pass the template file an object as an argument
  // // 4. Will return an interpolated HTML string
  // const showPlayersHtml = showPlayersTemplate({ players: responseData.players })
  // // 5. Insert HTML string onto the page using jQuery
  // // use .append or .html
  // $('.content').html(showPlayersHtml)
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
  $('.content').empty()
  successMessage('You delete your created player!')
  clearMessaging()
}

const deleteCreatedPlayerFailure = () => {
  failureMessage("You don't have a created player to delete")
  clearMessaging()
}

module.exports = {
  showCreatedPlayerSuccessful,
  showCreatedPlayerFailure,
  createPlayerSuccessful,
  createPlayerFailure,
  deleteCreatedPlayerSuccessful,
  deleteCreatedPlayerFailure
}
