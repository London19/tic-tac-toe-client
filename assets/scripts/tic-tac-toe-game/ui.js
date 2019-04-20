'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
//  console.log('sign up success ran with the data', data)
  $('.game-update').text('Successfully Signed Up!').show()
  $('.game-update').hide(2000)
  $('form').trigger('reset')
  $('#sign-up').hide()
}

const signUpFailure = function (data) {
//  console.log('sign up failure ran with the data', data)
  $('.game-update').text('Sign Up Failed').show()
  $('.game-update').hide(2000)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  // $('form').reset()
  store.user = data.user
  $('.game-update').text('Welcome to Tic Tac Toe!').show()
  $('.game-update').hide(3000)
  $('#change-password').show()
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('.new-game').show()
  $('.get-game-numbers').show()
}

const signInFailure = function (data) {
  $('.game-update').text('Sign In Failed').show()
  $('.game-update').hide(2000)
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.new-game').hide()
  $('.get-game-numbers').hide()
}

const changePwSuccess = function () {
  $('.game-update').text('Successfully changed your password!').show()
  $('.game-update').hide(2000)
  $('form').trigger('reset')
}

const changePwFailure = function () {
  $('.game-update').text('Chang password failed!').show()
  $('.game-update').hide(2000)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('.game-update').text('You\'ve already sign out! ').show()
  $('.game-update').hide(3500)
  $('form').trigger('reset')
  $('#game-board').hide()
  $('.new-game').hide()
  $('.get-game-numbers').hide()
  $('.restart').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}

const signOutFailure = function () {
  $('.game-update').text('Sign out failed!').show()
  $('.game-update').hide(2000)
  $('form').trigger('reset')
}

const getGamesSuccess = function (data) {
  const numberOfGame = data.games.length
  //  $('form').reset()
  $('.game-update').text('The game you have played is ' + numberOfGame).show()
  $('.game-update').hide(2000)
  $('form').trigger('reset')
}

const getGamesFailure = function () {
  $('.game-update').text('GET Game Failed')
  $('form').trigger('reset')
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
