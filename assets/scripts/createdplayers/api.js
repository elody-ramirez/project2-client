'use strict'

const config = require('../config')
const store = require('../store')

const showCreatedPlayer = (id) => {
  return $.ajax({
    url: config.apiUrl + '/createdplayers/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createPlayer = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/createdplayers`,
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

const deletePlayer = (id) => {
  return $.ajax({
    url: config.apiUrl + `/createdplayers/` + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  showCreatedPlayer,
  createPlayer,
  deletePlayer
  // updatePlayer
}
