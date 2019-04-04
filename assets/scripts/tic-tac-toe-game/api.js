const config = require('../config.js')

const playGames = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + data.game.id,
    method: 'PATCH',
    data
  })
}

module.exports = {
  playGames
}
