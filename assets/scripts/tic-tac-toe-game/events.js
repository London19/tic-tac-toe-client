'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')
$('#game-board').hide()
store.currentPlayer = 'x'
store.gameBoard = ['', '', '', '', '', '', '', '', '']
let gameStatus = false

const onPlayGames = function (event) {
  event.preventDefault()
  if (gameStatus === false) {
    if ($(event.target).text() === '') {
      $(event.target).text(store.currentPlayer)
      if (store.currentPlayer === 'x') {
        store.currentPlayer = 'o'
      } else {
        store.currentPlayer = 'x'
      }
    } else {
      $('.game-update').text('invalid Move!')
      // put a massage "invalid move"
    }
    const boxId = $(event.target).data('index')
    store.gameBoard[boxId] = store.currentPlayer
    console.log(store.gameBoard)
    api.updateGame(store.currentPlayer, boxId, gameStatus)
    console.log(store.currentPlayer, boxId, gameStatus)
  }

  const theWinner = function (gameBoard, currentPlayer) {
    console.log(currentPlayer)
    if ((gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] &&
          gameBoard[0] === currentPlayer) ||
    // horizontal #1
        (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] &&
          gameBoard[3] === currentPlayer) ||
    // horizontal #2
        (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] &&
          gameBoard[6] === currentPlayer) ||
    // horizontal #3
        (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] &&
          gameBoard[0] === currentPlayer) ||
    // vertical #1
        (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] &&
          gameBoard[1] === currentPlayer) ||
    // vertical #2
        (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] &&
          gameBoard[2] === currentPlayer) ||
    // vertical #3
        (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] &&
          gameBoard[0] === currentPlayer) ||
    // diagonal #1
        (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] &&
          gameBoard[2] === currentPlayer)) {
    // diagonal #2
      $('.game-update').text(`Winner is ${currentPlayer}`)
      gameStatus = true
      console.log(gameStatus)
    } else {
      theGameIsTie()
    }
  }
  theWinner(store.gameBoard, store.currentPlayer)
}

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePWFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('.new-game').on('click', onCreateNewGame)
}
const restartTheGame = function (data) {
  store.game = data.game
  gameStatus = false
  $('#game-board').show()
  store.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.currentPlayer = 'x'
  $('.col-4').empty()
  console.log(gameStatus, store.game, store.currentPlayer)
}
const onCreateNewGame = function () {
  api.createNewGame()
    .then(restartTheGame)
    .catch(ui.createNewGameFailure)
}
const theGameIsTie = function () {
  console.log(store.gameBoard)
  store.gameBoard.every((item) => {
    if (item !== '') {
      gameStatus = true
      $('.game-update').text(`GAME OVER! DRAW!`)
    }
  })
}
const getGames = function () {
  api.getGames()
    .then()
    .catch()
}
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

//     return currentPlayer//   } else {
//     return currentPlayer
//   }
// }
// const data = getFormFields(event.target)
// api.playGame(data.id)
//   .then(ui.playGameSuccess)
//   .catch(ui.playGameFailure)

module.exports = {
  onPlayGames,
  addHandlers,
  getGames
}
