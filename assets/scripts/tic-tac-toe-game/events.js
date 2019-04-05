// const api = require('./api.js')
// const ui = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields.js')
const gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
console.log(gameBoard)

let currentPlayer = 'x'

const onPlayGames = function (event) {
  event.preventDefault()
  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    if (currentPlayer === 'x') {
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
  } else {
    console.log('the current player is ' + currentPlayer)
  }
$('div').data('index') === "o"

//   const currentValue = ' '
  //  const onSelectBox = function (event) {
  // event.preventDefault()
  // $(event.target).text(currentValue)
  // if (currentValue === ' ') {
  // return currentPlayer
  // } else {
  //   return currentValue
  // }

  //     return currentPlayer
  //   } else {
  //     return currentPlayer
  //   }
  // }
  // const data = getFormFields(event.target)
  // api.playGame(data.id)
  //   .then(ui.playGameSuccess)
  //   .catch(ui.playGameFailure)
}

module.exports = {
  onPlayGames
}
