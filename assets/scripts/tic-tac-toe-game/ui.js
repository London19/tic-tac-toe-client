'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
//  console.log('sign up success ran with the data', data)
  $('.game-update').text('Successfully Signed Up!')
  $('.game-update').hide(2000)
}

const signUpFailure = function (data) {
//  console.log('sign up failure ran with the data', data)
  $('.game-update').text('Sign Up Failed')
  $('.game-update').hide(2000)
}

const signInSuccess = function (data) {
  // $('form').reset()
  store.user = data.user
  $('.game-update').text('Welcome to Tic Tac Toe!')
  $('.game-update').hide(5000)
}

const signInFailure = function (data) {
  $('.game-update').text('Sign In Failed')
  $('.game-update').hide(2000)
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
  //  $('form').reset()
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
