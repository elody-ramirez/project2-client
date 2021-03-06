'use strict'

// const store = require('../store')
const showPlayersTemplate = require('../templates/players-listing.handlebars')
const getNBAPlayerTemplate = require('../templates/get-nbaplayer.handlebars')

// const successMessage = message => {
//   $('#message').text(message)
//   $('form').trigger('reset')
// }

const failureMessage = message => {
  $('.message').text(message)
  $('form').trigger('reset')
}

const clearMessaging = function () {
  setTimeout(function () {
    $('.message').text('')
  }, 4000)
}

const indexPlayersSuccessful = responseData => {
  // 2. Use the template file as a function
  // 3. Pass the template file an object as an argument
  // 4. Will return an interpolated HTML string
  const showPlayersHtml = showPlayersTemplate({ players: responseData.players })
  // 5. Insert HTML string onto the page using jQuery
  // use .append or .html
  $('.content').html(showPlayersHtml)
}

const indexPlayersFailure = responseData => {
  failureMessage('This action was not successul')
  clearMessaging()
}

const getPlayerSuccessful = responseData => {
  // 2. Use the template file as a function
  // 3. Pass the template file an object as an argument
  // 4. Will return an interpolated HTML string
  const getNBAPlayerHtml = getNBAPlayerTemplate({ player: responseData.player })
  // 5. Insert HTML string onto the page using jQuery
  // use .append or .html
  $('.content').append(getNBAPlayerHtml)
}

const getPlayerFailure = () => {
  failureMessage('You were not able to open a pack')
  clearMessaging()
}

module.exports = {
  indexPlayersSuccessful,
  indexPlayersFailure,
  getPlayerSuccessful,
  getPlayerFailure
}
