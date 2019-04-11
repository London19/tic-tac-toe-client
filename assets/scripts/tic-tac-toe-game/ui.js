'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
//  console.log('sign up success ran with the data', data)
  $('.game-update').text('Successfully Signed Up!')
}

const signUpFailure = function (data) {
//  console.log('sign up failure ran with the data', data)
  $('.game-update').text('Sign Up Failed')
}

const signInSuccess = function (data) {
  console.log('sign in success ran with the data', data)
  store.user = data.user
}

const signInFailure = function (data) {
  console.log('sign in failure ran with the data', data)
}

const changePwSuccess = function () {
  $('.game-update').text('Successfully changed your password!')
}

const changePwFailure = function () {
  $('.game-update').text('Chang password failed!')
}

const signOutSuccess = function () {
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
  $('.game-update').text('GET Game Failed')
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
