// const api = require('./api.js')
// const ui = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields.js')


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

  const gameBoard = ['', '', '', '', '', '', '', '', '']
  // gameBorad[i] = boxId
  const boxId = $(event.target).data('index')

  gameBoard[boxId] = currentPlayer

  console.log(gameBoard)

const theWinner
} // gameBoard[0] = $('div').data('index0') === 'o'

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
