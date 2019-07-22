'use strict'

const config = require('../config')
// const store = require('../store')

const indexPlayers = () => {
  return $.ajax({
    url: config.apiUrl + '/players',
    method: 'GET'
  })
}

module.exports = {
  indexPlayers
}
