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

  // const theWinner = function (gameBoard, currentPlayer) {
  //   if((gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] &&
  //     gameBoard[0] === currentValue)
  //     || (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] &&
  //       gameBoard[3] === currentValue)
  //       || (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] &&
  //         gameBoard[6] === currentValue)
  //         || (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] &&
  //           gameBoard[1] === currentValue)
  //           || (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] &&
  //             gameBoard[2] === currentValue)
  //             || (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]
  //               && gameBoard[0] === currentValue)
  //               || (gameBoard[2] === gameBoard[4]
  //                 && gameBoard[2] === gameBoard[6] &&
  //                 gameBoard[2] === currentValue)) {
  //     console.log('Winner is ' + currentPlayer )
  //   } else {
  //     console.log('Winner is computer')
  //   }
  // }
    // [0, 1, 2],
    // [3, 4, 5],
    // [6, 7, 8],
    // [0, 3, 6],
    // [1, 4, 7],
    // [2, 5, 8],
    // [0, 4, 8],
    // [2, 4, 6]


  // if (gameBoard[0] === currentPlayer && gameBoard[1] === currentPlayer) {
  //   console.log('win')
  // } else {
  //   console.log('not Win')
  //

// const theWinner = function ()

// gameBoard[0] = $('div').data('index0') === 'o'

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
