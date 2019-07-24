'use strict'

// const store = require('../store')
const myTeamTemplate = require('../templates/myteam.handlebars')
const showUserPlayersTemplate = require('../templates/userplayers-listing.handlebars')
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
  }, 5000)
}

const myTeamSuccessful = responseData => {
  // 2. Use the template file as a function
  // 3. Pass the template file an object as an argument
  // 4. Will return an interpolated HTML string
  const myTeamHtml = myTeamTemplate()
  // 5. Insert HTML string onto the page using jQuery
  // use .append or .html
  $('main').html(myTeamHtml)
}

const myTeamFailure = responseData => {
  failureMessage('This action was not successul')
  clearMessaging()
}

const addUserPlayerSuccessful = responseData => {
  $('.content').empty()
  successMessage('You added this player to your Team!')
  clearMessaging()
}

const addUserPlayerFailure = () => {
  $('.content').empty()
  failureMessage('You have 3 Players on your team already. You need to drop 1.')
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

const myTeamBackSuccessful = responseData => {
  // 2. Use the template file as a function
  // 3. Pass the template file an object as an argument
  // 4. Will return an interpolated HTML string
  const signInHtml = signInTemplate()
  // 5. Insert HTML string onto the page using jQuery
  // use .append or .html
  $('main').html(signInHtml)
}

const myTeamBackFailure = responseData => {
  failureMessage('This action was not successul')
  clearMessaging()
}

module.exports = {
  myTeamSuccessful,
  myTeamFailure,
  addUserPlayerSuccessful,
  addUserPlayerFailure,
  indexUserPlayersSuccessful,
  indexUserPlayersFailure,
  removeUserPlayerSuccessful,
  removeUserPlayerFailure,
  myTeamBackSuccessful,
  myTeamBackFailure
}
