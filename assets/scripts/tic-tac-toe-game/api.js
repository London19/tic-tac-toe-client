const config = require('../config.js')

const playGames = function (id) {
  return $.ajax({
    url: config.apiUrl + `/games/${id}`,
    method: 'PATCH'
  })
}

module.exports = {
  playGames
}
