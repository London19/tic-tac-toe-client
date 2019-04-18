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
$('#sign-out').hide()

store.currentPlayer = 'x'
store.gameBoard = ['', '', '', '', '', '', '', '', '']
let gameStatus = false

const onPlayGames = function (event) {
  event.preventDefault()
  if (gameStatus === false) {
    if ($(event.target).text() === '') {
      const boxId = $(event.target).data('index')
      api.updateGame(store.currentPlayer, boxId, gameStatus)
        .then(function (data) {
          store.gameBoard = data.game.cells
          $(event.target).text(store.currentPlayer)
          theWinner(store.gameBoard, store.currentPlayer)

          if (store.currentPlayer === 'x') {
            store.currentPlayer = 'o'
            // theWinner(store.gameBoard, store.currentPlayer)
          } else {
            store.currentPlayer = 'x'
            // theWinner(store.gameBoard, store.currentPlayer)
          }
        })
        .catch()
    } else {
      $('.game-update').text('Invalid Move!').show()
      $('.game-update').hide(2000)
      // put a massage "invalid move"
    }
  } else {
    $('.game-update').text('Game Over!').show()
    $('.game-update').hide(2000)
    // put a massage "invalid move"
  }
}
// const boardIsFull = function () {
//   return store.gameBoard.every((item) => {
//     return item !== ''
//   })
// }

// store.gameBoard.every((item) => {
//   if (item !== '') {
//     gameStatus = true
//     $('.game-update').text(`GAME OVER! DRAW!`)
//   }
// })
const theGameIsTie = function () {
  const boardIsFull = store.gameBoard.every((item) => {
    console.log(item, item !== '')
    return item !== ''
  })
  console.log(boardIsFull)
  if (boardIsFull) {
    gameStatus = true
    $('.game-update').text(`Game Tie!`).show()
    $('.game-update').hide(2000)
  }
}

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
    $('.game-update').text(`Winner is ${currentPlayer}`).show()
    $('.game-update').hide(2000)
  } else {
  // $('.game-update').text('Winner is the computer!')
    theGameIsTie()
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
  //  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  $('.new-game').show()
  $('.get-game-numbers').show()
  // $('#sign-up').show()
  // $('#sign-out').show()
  // $('#change-password').hide()

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
  // $('.col-4').on('click')
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
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

module.exports = {
  onPlayGames,
  addHandlers,
  getGames
}
