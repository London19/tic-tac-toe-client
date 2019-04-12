'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
//  console.log('sign up success ran with the data', data)
  $('.game-update').text('Successfully Signed Up!')
  $('.game-update').hide(2000)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
//  console.log('sign up failure ran with the data', data)
  $('.game-update').text('Sign Up Failed')
  $('.game-update').hide(2000)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  // $('form').reset()
  store.user = data.user
  $('.game-update').text('Welcome to Tic Tac Toe!')
  $('.game-update').hide(3000)
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
}

const signInFailure = function (data) {
  $('.game-update').text('Sign In Failed')
  $('.game-update').hide(2000)
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#sign-out').hide()
}

const changePwSuccess = function () {
  $('.game-update').text('Successfully changed your password!')
  $('form').trigger('reset')
}

const changePwFailure = function () {
  $('.game-update').text('Chang password failed!')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
}

const signOutFailure = function () {
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
