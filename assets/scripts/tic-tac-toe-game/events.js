'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')
$('#game-board').hide()
$('.new-game').hide()
$('.get-game-numbers').hide()
$('.restart').hide()
$('#change-password').hide()

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
        // theWinner(store.gameBoard, store.currentPlayer)
      } else {
        store.currentPlayer = 'x'
        // theWinner(store.gameBoard, store.currentPlayer)
      }
    } else {
      $('.game-update').text('invalid Move!')
      // put a massage "invalid move"
    }
  }
  const boxId = $(event.target).data('index')
  store.gameBoard[boxId] = store.currentPlayer
  console.log(store.gameBoard)
  api.updateGame(store.currentPlayer, boxId, gameStatus)
  console.log(store.currentPlayer, boxId, gameStatus)

  const theWinner = function (gameBoard, currentPlayer) {
    console.log(gameBoard, currentPlayer)
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
      gameStatus = true
      $('.game-update').text(`Winner is ${currentPlayer}`)
    } else {
    // $('.game-update').text('Winner is the computer!')
      theGameIsTie()
    }
  }
  theWinner(store.gameBoard, store.currentPlayer)
  const theGameIsTie = function () {
    console.log(store.gameBoard)
    store.gameBoard.every((item) => {
      if (item !== '') {
        gameStatus = true
        $('.game-update').text(`GAME OVER! DRAW!`)
      }
    })
  }
}
// if (theGameIsTie()) {
//   console.log('the game is tie')
// } else {
//   console.log('the game is still going')
//
// }
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
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.new-game').show()
  $('.get-game-numbers').show()
  $('#change-password').show()

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
  $('#game-board').hide()
  $('.new-game').hide()
  $('.get-game-numbers').hide()
  $('.restart').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
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

const getGames = function () {
  event.preventDefault()
  $('.game-update').hide()
  api.getGames()
    .then()
    .catch()
}

module.exports = {
  onPlayGames,
  addHandlers,
  getGames
}
