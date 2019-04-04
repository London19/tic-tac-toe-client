'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./tic-tac-toe-game/events.js')

$(() => {
  // your JS code goes here
  $('.col-4').on('click', events.onPlayGames)
})

// const theWinner = () {
//   const theWinner0 = {#id[0]}
//   const theWinner1 = {#id[1]}
//   const theWinner2 = {#id[2]}
//   const theWinner3 = {#id[3]}
//   const theWinner4 = {#id[4]}
//   const theWinner5 = {#id[5]}
//   const theWinner6 = {#id[6]}
//   const theWinner7 = {#id[7]}
//   const theWinner8 = {#id[8]}
// }
// if (theWinner0 === null; theWinner0 === theWinner1 === theWinner2) {
//   console.log (Win)
// } else if (theWinner3 === null; theWinner3 === theWinner4 === theWinner5) {
//   console.log (Win)
// } else if (theWinner6 === null; theWinner6 === theWinner7 === theWinner8) {
//   console.log (Win)
// } else if (theWinner0 === null; theWinner0 === theWinner3 === theWinner6) {
//   console.log (Win)
// } else if (theWinner1 === null; theWinner1 === theWinner4 === theWinner7) {
//   console.log (Win)
// } else if (theWinner2 === null; theWinner2 === theWinner5 === theWinner8) {
//   console.log (Win)
// } else if (theWinner0 === null; theWinner0 === theWinner4 === theWinner8) {
//   console.log (Win)
// } else if (theWinner2 === null; theWinner2 === theWinner4 === theWinner6) {
//   console.log (Win)
// } else
