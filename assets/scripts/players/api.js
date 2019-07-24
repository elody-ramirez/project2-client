'use strict'

const config = require('../config')

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

module.exports = {
  indexPlayers,
  getPlayer
}
