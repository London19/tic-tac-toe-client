// const api = require('./api.js')
// const ui = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields.js')
let currentPlayer = 'x'

const onPlayGames = function (event) {
  event.preventDefault()
  $(event.target).text(currentPlayer)
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }

  // const data = getFormFields(event.target)
  // api.playGame(data.id)
  //   .then(ui.playGameSuccess)
  //   .catch(ui.playGameFailure)
}

module.exports = {
  onPlayGames

}
