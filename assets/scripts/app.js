'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./tic-tac-toe-game/events.js')

$(() => {
  // your JS code goes here
  $('.col-4').on('click', events.onPlayGames)
  events.addHandlers()
  $('.restart').on('click', events.restartTheGame, events.createNewGame)
  $('.get-game-numbers').on('click', events.getGames)
})
