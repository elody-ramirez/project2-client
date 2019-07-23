'use strict'

const config = require('../config')
const store = require('../store')

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

// curl "http://localhost:4741/userplayers" \
//   --include \
//   --request POST \
//   --header "Content-Type: application/json" \
//   --header "Authorization: Token token=${TOKEN}" \
//   --data '{
//     "userplayer": {
//       "user_id": "'"${USER_ID}"'",
//       "player_id": "'"${PLAYER_ID}"'"
//     }
//   }'
//
// echo

module.exports = {
  addUserPlayer
}
