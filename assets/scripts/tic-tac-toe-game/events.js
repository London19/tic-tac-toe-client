const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onPlayGames = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.playGame(data.id)
    .then(ui.playGameSuccess)
    .catch(ui.playGameFailure)
}

module.exports = {
  onPlayGames

}
