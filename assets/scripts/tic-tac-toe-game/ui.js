'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log('sign up success ran with the data', data)
}

const signUpFailure = function (data) {
  console.log('sign up failure ran with the data', data)
}

const signInSuccess = function (data) {
  console.log('sign in success ran with the data', data)
  store.user = data.user
}

const signInFailure = function (data) {
  console.log('sign in failure ran with the data', data)
}

const changePwSuccess = function () {
  console.log('change password success')
}

const changePwFailure = function () {
  console.log('change password failure')
}

const signOutSuccess = function () {
  console.log('sign out success')
}

const signOutFailure = function () {
  console.log('sign out failure')
}

const getGamesSuccess = function (data) {
  const numberOfGame = data.games.length
  console.log(numberOfGame)
  $('.game-update').text('The game you have played is ' + numberOfGame)
}

const getGamesFailure = function () {
  console.log('sign out failure')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure,
  getGamesSuccess,
  getGamesFailure
}
