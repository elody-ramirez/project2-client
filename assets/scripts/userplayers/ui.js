'use strict'

// const store = require('../store')
const showUserPlayersTemplate = require('../templates/userplayers-listing.handlebars')

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
  $('.content').empty()
  successMessage('You added this player to your Team!')
  clearMessaging()
}

const addUserPlayerFailure = () => {
  failureMessage("You can't add this player")
  clearMessaging()
}

const indexUserPlayersSuccessful = responseData => {
  // 2. Use the template file as a function
  // 3. Pass the template file an object as an argument
  // 4. Will return an interpolated HTML string
  const showUserPlayersHtml = showUserPlayersTemplate({
    userplayers: responseData.userplayers })
  // 5. Insert HTML string onto the page using jQuery
  // use .append or .html
  $('.content').html(showUserPlayersHtml)
}

const indexUserPlayersFailure = () => {
  failureMessage("You don't have a player on your team yet!")
  clearMessaging()
}

const removeUserPlayerSuccessful = responseData => {
  $('.content').empty()
  successMessage('You removed this player from your team!')
  clearMessaging()
}

const removeUserPlayerFailure = () => {
  failureMessage("You can't add this player")
  clearMessaging()
}

module.exports = {
  addUserPlayerSuccessful,
  addUserPlayerFailure,
  indexUserPlayersSuccessful,
  indexUserPlayersFailure,
  removeUserPlayerSuccessful,
  removeUserPlayerFailure
}
