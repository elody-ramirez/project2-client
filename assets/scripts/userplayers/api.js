'use strict'

const config = require('../config')
const store = require('../store')

const indexUserPlayers = () => {
  return $.ajax({
    url: config.apiUrl + '/userplayers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addUserPlayer = (playerId) => {
  return $.ajax({
    url: config.apiUrl + '/userplayers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      userplayer: {
        user_id: store.user.id,
        player_id: playerId
      }
    }
  })
}

const removeUserPlayer = (userPlayerId) => {
  return $.ajax({
    url: config.apiUrl + '/userplayers/' + userPlayerId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addUserPlayer,
  indexUserPlayers,
  removeUserPlayer
}
