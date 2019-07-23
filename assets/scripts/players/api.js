'use strict'

const config = require('../config')
const store = require('../store')

const indexPlayers = () => {
  return $.ajax({
    url: config.apiUrl + '/players',
    method: 'GET'
  })
}

const getPlayer = (id) => {
  return $.ajax({
    url: config.apiUrl + `/players/${id}`,
    method: 'GET'
  })
}

const createPlayer = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/players`,
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const updatePlayer = (formData) => {
//   return $.ajax({
//     url: config.apiUrl + `/players/` + id,
//     method: 'PATCH',
//     data: formData,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  indexPlayers,
  getPlayer,
  createPlayer
  // updatePlayer
}
